package com.proji.web;

import java.sql.SQLException;
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
import org.springframework.web.bind.annotation.RestController;

import com.proji.beans.CategoryType;
import com.proji.beans.Coupon;
import com.proji.exceptions.CompanyNotFoundExcpetion;
import com.proji.exceptions.CouponNotFOundExcption;
import com.proji.exceptions.CustomerNotFoundExcpetion;
import com.proji.exceptions.TitleAlreadyExistesException;
import com.proji.services.CompanyFacade;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("company")
public class CompanyController {

	@Autowired
	Map<String, Session> sessionsMap;

//	private boolean isTimeout(Session session) {
//	
//}

	@PostMapping("/addcoupon/{token}")
	public ResponseEntity<Object> addCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				facade.addCoupon(coupon);
				return ResponseEntity.ok(coupon);

			} catch (TitleAlreadyExistesException | CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}

	}

	@PutMapping("/updatecoupon/{token}")
	public ResponseEntity<Object> updateCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				facade.updateCoupon(coupon);
				return ResponseEntity.ok(coupon);
			} catch (CouponNotFOundExcption e) {
				return ResponseEntity.badRequest().body(e.getMessage());
			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}

	}

	@DeleteMapping("/deletecoupon/{token}/{id}")
	public ResponseEntity<Object> deleteCoupon(@PathVariable String token, @PathVariable int id) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			// session.setLastAccessed(??);
			CompanyFacade facade = (CompanyFacade) session.getFacade();
			try {
				facade.deleteCoupon(id);
				return ResponseEntity.ok().build();
			} catch (CouponNotFOundExcption e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
		}
	}

	@GetMapping("/companyCoupons/{token}")
	public ResponseEntity<Object> getCompanyCoupons(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCompanyCoupons());
			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		} else
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/couponsbycategory/{token}/category/{category}")
	public ResponseEntity<Object> getCompanyCouponsByCategory(@PathVariable String token,
			@PathVariable("category") CategoryType category) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCompanyCouponsByCategory(category));
			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/couponsbyprice/{token}/price/{maxPrice}")
	public ResponseEntity<Object> getCompanyCouponsByPrice(@PathVariable String token, @PathVariable double maxPrice) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCompanyCouponsByMaxPrice(maxPrice));
			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("companydetails/{token}")
	public ResponseEntity<Object> getCompanyDetails(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CompanyFacade facade = (CompanyFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCompanyDetails());
			} catch (CompanyNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

}
