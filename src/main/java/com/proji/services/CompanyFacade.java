package com.proji.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.proji.beans.CategoryType;
import com.proji.beans.Company;
import com.proji.beans.Coupon;
import com.proji.beans.Customer;
import com.proji.exceptions.CompanyNotFoundExcpetion;
import com.proji.exceptions.CouponNotFOundExcption;
import com.proji.exceptions.CustomerNotFoundExcpetion;
import com.proji.exceptions.TitleAlreadyExistesException;

@Service
@Scope("prototype")

public class CompanyFacade extends ClientFacade {
	private int companyID;

	@Override
	public boolean login(String email, String password) {
		Company comp = compDB.findCompanyByEmailAndPassword(email, password);
		if (comp != null) {
			companyID = comp.getId();
			return true;
		} else
			return false;
	}

	public void addCoupon(Coupon coupon) throws TitleAlreadyExistesException, CompanyNotFoundExcpetion {
		List<Coupon> coupons = coupDB.getAllCoupons();
		for (Coupon coupon2 : coupons) {
			if (coupon2.getTitle() == coupon.getTitle())
				throw new TitleAlreadyExistesException();
		}
		Company company = compDB.getCompanyById(companyID);
		coupDB.addCoupon(coupon);

		company.addCoupon(coupon);
		compDB.updateCompany(company);

	}

	public void updateCoupon(Coupon coupon) throws CouponNotFOundExcption {

		coupDB.updateCoupon(coupon);

	}

	public void deleteCoupon(int couponId)
			throws CouponNotFOundExcption, CompanyNotFoundExcpetion, CustomerNotFoundExcpetion {

		Coupon couponToDelete = coupDB.getCouponById(couponId);
		Company comp = couponToDelete.getCompany();
		comp.removeCoupon(couponToDelete);
		compDB.updateCompany(comp);

		List<Customer> customers = cusDB.getAllCustomers();
		for (Customer customer : customers) {
			if (customer.getCoupons().contains(couponToDelete)) {
				customer.getCoupons().remove(couponToDelete);
				cusDB.updateCustomer(customer);
			}
		}
		coupDB.deleteCoupon(couponId);
	}

	public List<Coupon> getCompanyCoupons() throws CompanyNotFoundExcpetion {
		return compDB.getCompanyById(companyID).getCoupons();
	}

	public List<Coupon> getCompanyCouponsByCategory(CategoryType category) throws CompanyNotFoundExcpetion {
		List<Coupon> coups = new ArrayList();
		List<Coupon> compcoups = getCompanyCoupons();
		for (Coupon coupon : compcoups) {
			if (coupon.getCategory().equals(category))
				coups.add(coupon);

		}

		return coups;
	}

	public List<Coupon> getCompanyCouponsByMaxPrice(double maxPrice) throws CompanyNotFoundExcpetion {
		List<Coupon> coups = new ArrayList();
		List<Coupon> compcoups = getCompanyCoupons();
		for (Coupon coupon : compcoups) {
			if (coupon.getPrice() < (maxPrice))
				coups.add(coupon);

		}

		return coups;
	}

	public Company getCompanyDetails() throws CompanyNotFoundExcpetion {
		return compDB.getCompanyById(companyID);
	}

}
