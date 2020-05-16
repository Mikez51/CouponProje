package com.proji.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proji.beans.Coupon;
import com.proji.beans.Customer;
import com.proji.exceptions.CouponNotFOundExcption;

@Repository
public class CouponDBDAO {

	@Autowired
	private CouponRepository coupRepo;

	public void addCoupon(Coupon coupon) {
		coupRepo.save(coupon);
	}

	public void updateCoupon(Coupon coupon) throws CouponNotFOundExcption {
		if (coupRepo.existsById(coupon.getId()))
			coupRepo.save(coupon);
		else
			throw new CouponNotFOundExcption();

	}

	public void deleteCoupon(int couponId) {
		coupRepo.deleteById(couponId);

	}

	public List<Coupon> getAllCoupons() {
		return coupRepo.findAll();
	}

	public Coupon getCouponById(int id) throws CouponNotFOundExcption {
		Optional<Coupon> opt = coupRepo.findById(id);
		if (opt.isPresent())
			return opt.get();
		else
			throw new CouponNotFOundExcption();
	}

}
