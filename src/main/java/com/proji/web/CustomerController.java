package com.proji.web;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proji.beans.CategoryType;
import com.proji.beans.Coupon;
import com.proji.exceptions.CouponNotFOundExcption;
import com.proji.exceptions.CustomerNotFoundExcpetion;
import com.proji.exceptions.couponAlreadyPurchesedExciption;
import com.proji.exceptions.expiredCouponException;
import com.proji.exceptions.noCouponInStockException;
import com.proji.services.CustomerFacade;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("customer")
public class CustomerController {
	@Autowired
	Map<String, Session> sessionsMap;

	@PostMapping("/customerpurchase/{token}")
	public ResponseEntity<Object> purchaseCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				facade.purchaseCoupon(coupon);
				return ResponseEntity.ok(coupon);

			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (couponAlreadyPurchesedExciption e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (noCouponInStockException e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (expiredCouponException e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			} catch (CouponNotFOundExcption e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/customercoupons/{token}")
	public ResponseEntity<Object> getCustomerCoupons(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCustomerCoupons(facade.getCustomerDetails().getId()));
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/customercouponsbycategory/{token}/category/{category}")
	public ResponseEntity<Object> getCustomerCouponsByCategory(@PathVariable String token,
			@PathVariable CategoryType category) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCustomerCouponsByCategory(category));
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");

	}

	@GetMapping("/customercouponsbyprice/{token}/price/{maxPrice}")
	public ResponseEntity<Object> getCustomerCouponsByPrice(@PathVariable String token, @PathVariable double maxPrice) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCustomerCouponsByMaxPrice(maxPrice));
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("customerdetails/{token}")
	public ResponseEntity<Object> getCustomerDetails(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				return ResponseEntity.ok(facade.getCustomerDetails());
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@PutMapping("/deletepurchasedcoupon/{token}")
	public ResponseEntity<Object> deleteCouponsPurchase(@PathVariable String token, @RequestBody Coupon coupon) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();

			try {
				facade.deleteCouponPurchase(coupon);
			} catch (CustomerNotFoundExcpetion e) {
				return ResponseEntity.badRequest().body(e.getMessage());

			}
			return ResponseEntity.ok().build();

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

	@GetMapping("/allcoupons/{token}")
	public ResponseEntity<Object> getAllCoupons(@PathVariable String token) {
		Session session = sessionsMap.get(token);
		if (session != null) {
			CustomerFacade facade = (CustomerFacade) session.getFacade();
			return ResponseEntity.ok(facade.getAllCoupons());

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login");
	}

}