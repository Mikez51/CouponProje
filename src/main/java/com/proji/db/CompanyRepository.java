package com.proji.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proji.beans.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

	Company findCompanyByEmailAndPassword(String email, String password);

}
