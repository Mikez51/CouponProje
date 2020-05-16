package com.proji.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proji.db.CompanyDBDAO;
import com.proji.db.CouponDBDAO;
import com.proji.db.CustomerDBDAO;

public abstract class ClientFacade {
	@Autowired
	protected CompanyDBDAO compDB;
	@Autowired
	protected CouponDBDAO coupDB;
	@Autowired
	protected CustomerDBDAO cusDB;

	public abstract boolean login(String email, String password);

}
