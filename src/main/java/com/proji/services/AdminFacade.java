package com.proji.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.proji.beans.Company;
import com.proji.beans.Coupon;
import com.proji.beans.Customer;
import com.proji.db.CompanyDBDAO;
import com.proji.exceptions.CannotChangeCompanyNameException;
import com.proji.exceptions.CompanyAlreadyExistExcption;
import com.proji.exceptions.CompanyNameOrEmailAlreayExistsException;
import com.proji.exceptions.CompanyNotFoundExcpetion;
import com.proji.exceptions.CustomerEmailAlreayExistesException;
import com.proji.exceptions.CustomerNotFoundExcpetion;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class AdminFacade extends ClientFacade {

	@Override
	public boolean login(String email, String password) {
		if (email.equals("admin@admin.com") && password.equals("admin"))
			return true;
		else
			return false;
	}

	public void addCompany(Company company) throws CompanyNameOrEmailAlreayExistsException {
		List<Company> companies = compDB.getAllcompany();
		for (Company company2 : companies) {
			if (company2.getName() == company.getName() || company2.getEmail() == company.getEmail())
				throw new CompanyNameOrEmailAlreayExistsException();
		}
		compDB.addCompany(company);
	}

	public void updateCompany(Company company) throws CannotChangeCompanyNameException, CompanyNotFoundExcpetion {
		if (company.getName().equals(compDB.getCompanyById(company.getId()).getName()))
			compDB.updateCompany(company);
		else
			throw new CannotChangeCompanyNameException();
	}

	public void deleteCompany(int compid) throws CompanyNotFoundExcpetion, CustomerNotFoundExcpetion {

		List<Coupon> couponToDelete = compDB.getCompanyById(compid).getCoupons();
		List<Customer> cus = cusDB.getAllCustomers();
		for (Coupon coupon : couponToDelete) {
			for (Customer customer : cus) {
				customer.getCoupons().remove(coupon);
				cusDB.updateCustomer(customer);
			}

		}

		compDB.deleteCompany(compid);

	}

	public List<Company> getAllCompanies() {
		return compDB.getAllcompany();
	}

	public Company getCompanyById(int companyid) throws CompanyNotFoundExcpetion {
		return compDB.getCompanyById(companyid);
	}

	public void addCustomer(Customer customer) throws CustomerEmailAlreayExistesException {
		List<Customer> customers = cusDB.getAllCustomers();
		for (Customer customer2 : customers) {
			if (customer2.getEmail() == customer.getEmail())
				throw new CustomerEmailAlreayExistesException();
		}
		cusDB.addCustomer(customer);
	}

	public void updateCustomer(Customer customer) throws CustomerNotFoundExcpetion {

		cusDB.updateCustomer(customer);

	}

	public void deleteCustomer(int customerid) throws CustomerNotFoundExcpetion {
		Customer cust = cusDB.getCustomerById(customerid);
		cust.getCoupons().clear();
		cusDB.updateCustomer(cust);
		cusDB.deleteCustomer(customerid);

	}

	public List<Customer> getAllCustomers() {
		return cusDB.getAllCustomers();
	}

	public Customer getCustomerById(int id) throws CustomerNotFoundExcpetion {
		return cusDB.getCustomerById(id);
	}

}
