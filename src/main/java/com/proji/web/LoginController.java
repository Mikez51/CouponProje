package com.proji.web;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proji.exceptions.InvalidClientTypeException;
import com.proji.exceptions.LoginFaliedExcption;
import com.proji.login.ClientType;
import com.proji.login.LoginManager;
import com.proji.services.ClientFacade;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {

	@Autowired
	private LoginManager loginManager;
	@Autowired
	private Map<String, Session> sessionsMap;

	@PostMapping("/login/{email}/{password}/{type}")
	public String login(@PathVariable String email, @PathVariable String password, @PathVariable ClientType type) {

		try {
			String token = UUID.randomUUID().toString();
			ClientFacade facade = loginManager.login(email, password, type);
			// Calendar.getInstance().getTimeInMillis()
			Session session = new Session(facade, System.currentTimeMillis());
			sessionsMap.put(token, session);

			return token;
		} catch (InvalidClientTypeException e) {
			return "Error: " + e.getMessage();
		} catch (LoginFaliedExcption e) {
			return "Error: " + e.getMessage();
		}

	}

	@PostMapping("/logout/{token}")
	public void logout(@PathVariable String token) {
		sessionsMap.remove(token);
	}

}
