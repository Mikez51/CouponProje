package com.proji.db;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proji.beans.Coupon;

public interface CouponRepository extends JpaRepository<Coupon, Integer> {
	public List<Coupon> getCouponByCompanyId(int compid);

}
