package br.com.farias.service;

import java.util.List;

import br.com.farias.dto.CostumerDTO;
import br.com.farias.model.Costumer;

public interface CostumerService {
	
	Costumer saveCostumer(CostumerDTO costumerDTO);
	
	List<Costumer> findAllCostumers();
	
	List<Costumer> findByCompanyName(String companyName);
	
	Costumer updateCostumer(String companyDocumentNumber, CostumerDTO costumerDTO);
	
	Costumer disableCostumer(String companyDocumentNumber);

	Costumer findByCompanyDocumentNumber(String companyDocumentNumber);

}
