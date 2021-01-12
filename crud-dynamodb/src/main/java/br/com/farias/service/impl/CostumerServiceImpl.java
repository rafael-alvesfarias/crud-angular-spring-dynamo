package br.com.farias.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import br.com.farias.dto.CostumerDTO;
import br.com.farias.model.Costumer;
import br.com.farias.repository.CostumerRepository;
import br.com.farias.service.CostumerService;

@Service
public class CostumerServiceImpl implements CostumerService {

	private final CostumerRepository costumerRepository;

	public CostumerServiceImpl(CostumerRepository costumerRepository) {
		this.costumerRepository = costumerRepository;
	}

	@Override
	public Costumer saveCostumer(CostumerDTO costumerDTO) {
		if (costumerRepository.findByCompanyDocumentNumber(costumerDTO.getCompanyDocumentNumber()).isPresent()) {
			throw new RuntimeException("There is already a customer with this document number");
		}
		return costumerRepository.save(costumerDTO.costumerDTOToCostumer());
	}

	@Override
	public List<Costumer> findAllCostumers() {
		return (List<Costumer>) costumerRepository.findAll();
	}

	@Override
	public List<Costumer> findByCompanyName(String companyName) {
		return costumerRepository.findByCompanyName(companyName);
	}

	@Override
	public Costumer updateCostumer(String companyDocumentNumber, CostumerDTO costumerDTO) {
		Optional<Costumer> costumer = costumerRepository.findByCompanyDocumentNumber(companyDocumentNumber);

		if (costumer.isEmpty()) {
			throw new RuntimeException("There is no customer with this document number");
		}

		BeanUtils.copyProperties(costumerDTO, costumer.get(), "active", "id");

		return costumerRepository.save(costumer.get());
	}

	@Override
	public Costumer disableCostumer(String companyDocumentNumber) {
		Optional<Costumer> costumer = costumerRepository.findByCompanyDocumentNumber(companyDocumentNumber);

		if (costumer.isEmpty()) {
			throw new RuntimeException("There is no customer with this document number");
		}

		costumer.get().setActive(false);

		return costumerRepository.save(costumer.get());
	}

	@Override
	public Costumer findByCompanyDocumentNumber(String companyDocumentNumber) {
		Optional<Costumer> costumer = costumerRepository.findByCompanyDocumentNumber(companyDocumentNumber);

		if (costumer.isEmpty()) {
			throw new RuntimeException("There is no customer with this document number");
		}
		
		return costumer.get();
	}

}
