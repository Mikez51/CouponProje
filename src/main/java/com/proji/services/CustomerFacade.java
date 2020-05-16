package com.proji.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.stereotype.Service;

import com.proji.beans.CategoryType;
import com.proji.beans.Coupon;
import com.proji.beans.Customer;
import com.proji.exceptions.CouponNotFOundExcption;
import com.proji.exceptions.CustomerNotFoundExcpetion;
import com.proji.exceptions.couponAlreadyPurchesedExciption;
import com.proji.exceptions.expiredCouponException;
import com.proji.exceptions.noCouponInStockException;

@Service
public class CustomerFacade extends ClientFacade {

	private int customerId;

	@Override
	public boolean login(String email, String password) {
		Customer temp = cusDB.findCustomerByEmailAndPassword(email, password);
		if (temp != null) {
			customerId = temp.getId();
			return true;
		}

		return false;
	}

	public void purchaseCoupon(Coupon coupon) throws CustomerNotFoundExcpetion, couponAlreadyPurchesedExciption,
			noCouponInStockException, expiredCouponException, CouponNotFOundExcption {
		List<Coupon> coupons = cusDB.getCustomerById(customerId).getCoupons();
		for (Coupon coupon2 : coupons) {
			if (coupon2.getId() == coupon.getId())
				throw new couponAlreadyPurchesedExciption();
		}
		if (coupon.getAmount() == 0)
			throw new noCouponInStockException();
		if (coupon.getEndDate().before(new Date(Calendar.getInstance().getTimeInMillis())))
			throw new expiredCouponException();

		coupon.setAmount(-1);
		coupDB.updateCoupon(coupon);

		Customer cust = getCustomerDetails();
		cust.getCoupons().add(coupon);
		cusDB.updateCustomer(cust);

	}

	public void deleteCouponPurchase(Coupon coupon) throws CustomerNotFoundExcpetion {
		Customer cust = getCustomerDetails();
		cust.getCoupons().remove(coupon);
		cusDB.updateCustomer(cust);

	}

	public List<Coupon> getCustomerCoupons(int customerId) throws CustomerNotFoundExcpetion {
		return cusDB.getCustomerById(customerId).getCoupons();
	}

	public List<Coupon> getCustomerCouponsByCategory(CategoryType category) throws CustomerNotFoundExcpetion {
		List<Coupon> temp = cusDB.getCustomerById(customerId).getCoupons();
		List<Coupon> categorycoup = new ArrayList<Coupon>();
		for (Coupon coupon : temp) {
			if (coupon.getCategory() == category)
				categorycoup.add(coupon);

		}
		return categorycoup;
	}

	public List<Coupon> getCustomerCouponsByMaxPrice(double maxPrice) throws CustomerNotFoundExcpetion {
		List<Coupon> temp = cusDB.getCustomerById(customerId).getCoupons();
		List<Coupon> pricecoup = new ArrayList<Coupon>();
		for (Coupon coupon : temp) {
			if (coupon.getPrice() < maxPrice)
				pricecoup.add(coupon);

		}
		return pricecoup;
	}

	public Customer getCustomerDetails() throws CustomerNotFoundExcpetion {
		return cusDB.getCustomerById(customerId);
	}

	public List<Coupon> getAllCoupons(){
		return coupDB.getAllCoupons();
	}


}
