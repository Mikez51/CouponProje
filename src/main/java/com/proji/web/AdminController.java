package com.proji.web;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proji.beans.Company;
import com.proji.beans.Customer;
import com.proji.exceptions.CannotChangeCompanyNameException;
import com.proji.exceptions.CompanyNameOrEmailAlreayExistsException;
import com.proji.exceptions.CompanyNotFoundExcpetion;
import com.proji.exceptions.CustomerEmailAlreayExistesException;
import com.proji.exceptions.CustomerNotFoundExcpetion;
import com.proji.services.AdminFacade;

@RestController
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	Map<String, Session> sessionsMap;

//	private boolean isTimeout(Session session) {
//		
//	}

//	@PostMapping("/{token}")
//	public ResponseEntity<Boolean> validToken(@PathVariable String token) {
//		Session session = sessionsMap.get(token);
//		if (session != null)
//			return ResponseEntity.ok(true);
//		else
//			return ResponseEntity.ok(false);
//	}

	@PostMapping("/addcomp/{token}")
	public ResponseEntity<Object> addCompany(@PathVariable String token, @RequestBody Company company) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				facade.addCompany(company);
				return ResponseEntity.ok(company);
			} catch (CompanyNameOrEmailAlreayExistsException e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}

	}

	@PutMapping("/updatecomp/{token}")
	public ResponseEntity<Object> updateCompany(@PathVariable String token, @RequestBody Company company) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();

			try {
				facade.updateCompany(company);
				return ResponseEntity.ok(company);

			} catch (CannotChangeCompanyNameException | CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}
	}

	@DeleteMapping("/deletecomp/{token}/{id}")
	public ResponseEntity<Object> deleteCompany(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				facade.deleteCompany(id);
				return ResponseEntity.ok().build();

			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

		}
	}

	@GetMapping("/allcompanies/{token}")
	public ResponseEntity<Object> getAllCompanies(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			return ResponseEntity.ok(facade.getAllCompanies());
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

		}
	}

	@GetMapping("/getOneCompany/{token}/{compid}")
	public ResponseEntity<Object> getCompanyById(@PathVariable String token, @PathVariable int compid) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				return ResponseEntity.ok(facade.getCompanyById(compid));
			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

		}
	}

	@PostMapping("/addcustomer/{token}")
	public ResponseEntity<Object> addCustomer(@PathVariable String token, @RequestBody Customer customer) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				facade.addCustomer(customer);
				return ResponseEntity.ok(customer);

			} catch (CustomerEmailAlreayExistesException e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}
	}

	@PutMapping("/updatecustomer/{token}")
	public ResponseEntity<Object> updateCustomer(@PathVariable String token, @RequestBody Customer customer) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();

			try {
				facade.updateCustomer(customer);
				return ResponseEntity.ok(customer);

			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}
	}

	@DeleteMapping("/deletecustomer/{token}/{customerid}")
	public ResponseEntity<Object> deleteCustomer(@PathVariable String token, @PathVariable int customerid) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				facade.deleteCustomer(customerid);
				return ResponseEntity.ok().build();

			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}
	}

	@GetMapping("/allcustomers/{token}")
	public ResponseEntity<Object> getAllCustomers(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			return ResponseEntity.ok(facade.getAllCustomers());
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

		}
	}

	@GetMapping("/getonecustomer/{token}/{customerid}")
	public ResponseEntity<Object> getCustomerById(@PathVariable String token, @PathVariable int customerid) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			AdminFacade facade = (AdminFacade) session.getFacade();
			try {
				return ResponseEntity.ok(facade.getCustomerById(customerid));
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

		}
	}

}
