package com.proji.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proji.beans.Company;
import com.proji.beans.Coupon;
import com.proji.exceptions.CompanyNotFoundExcpetion;

@Repository
public class CompanyDBDAO {

	@Autowired
	private CompanyRepository compRepo;

	public Company findCompanyByEmailAndPassword(String email, String password) {
		return compRepo.findCompanyByEmailAndPassword(email, password);
	}

	public void addCompany(Company company) {
		compRepo.save(company);
	}

	public void updateCompany(Company company) throws CompanyNotFoundExcpetion {
		if (compRepo.existsById(company.getId()))
			compRepo.save(company);
		else
			throw new CompanyNotFoundExcpetion();

	}

	public void deleteCompany(int companyId) {
		compRepo.deleteById(companyId);
	}

	public List<Company> getAllcompany() {
		return compRepo.findAll();
	}

	public Company getCompanyById(int id) throws CompanyNotFoundExcpetion {
		Optional<Company> opt = compRepo.findById(id);
		if (opt.isPresent())
			return opt.get();
		else
			throw new CompanyNotFoundExcpetion();

	}

}
