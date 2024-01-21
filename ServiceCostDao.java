package com.jsp.HomeServo.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.ServiceCost;
import com.jsp.HomeServo.repository.CustomerRepository;
import com.jsp.HomeServo.repository.ServiceCostRepository;

@Service
public class ServiceCostDao {
	
	@Autowired
	ServiceCostRepository costRepository;
	
	@Autowired 
	CustomerRepository customerRepository;
	
	public ServiceCost saveServiceCost(ServiceCost cost) {
		return costRepository.save(cost);
	}
	
	public ServiceCost findById(ServiceCost cost) {
		Optional<ServiceCost> sc = costRepository.findById(cost.getId());
		if(sc.isPresent()) {
			return sc.get();
		}
		else
			return null;
	}
	
	public ServiceCost paymentMode(ServiceCost cost) {
		ServiceCost cost2 = costRepository.findById(cost.getId()).get();
		if(cost2 != null) {
			cost2.setMode(cost.getMode());
			return costRepository.save(cost2);
		}
		else
			return null;
	}
	
}
