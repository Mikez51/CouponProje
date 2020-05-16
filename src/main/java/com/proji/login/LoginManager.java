package com.proji.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import com.proji.exceptions.InvalidClientTypeException;
import com.proji.exceptions.LoginFaliedExcption;
import com.proji.services.AdminFacade;
import com.proji.services.ClientFacade;
import com.proji.services.CompanyFacade;
import com.proji.services.CustomerFacade;

@Component
public class LoginManager {

	@Autowired
	private ConfigurableApplicationContext ctx;

	public ClientFacade login(String email, String password, ClientType type)
			throws LoginFaliedExcption, InvalidClientTypeException {
		switch (type) {
		case Admin:
			AdminFacade adminFacade = ctx.getBean(AdminFacade.class);
			if (adminFacade.login(email, password))
				return adminFacade;
			else
				throw new LoginFaliedExcption();

		case Company:
			CompanyFacade companyFacade = ctx.getBean(CompanyFacade.class);
			if (companyFacade.login(email, password))
				return companyFacade;
			else
				throw new LoginFaliedExcption();

		case Customer:
			CustomerFacade customerFacade = ctx.getBean(CustomerFacade.class);
			if (customerFacade.login(email, password))
				return customerFacade;
			else
				throw new LoginFaliedExcption();

		default:
			throw new InvalidClientTypeException();

		}

	}

}
