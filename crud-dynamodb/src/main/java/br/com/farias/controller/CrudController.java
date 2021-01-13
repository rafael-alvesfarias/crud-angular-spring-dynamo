package br.com.farias.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.farias.dto.CostumerDTO;
import br.com.farias.model.Costumer;
import br.com.farias.service.CostumerService;

@CrossOrigin
@RestController
@RequestMapping("/v1")
public class CrudController {
	
	private final CostumerService costumerService;

	public CrudController(CostumerService costumerService) {
		this.costumerService = costumerService;
	}

	@PostMapping("/costumers")
    public ResponseEntity<Costumer> newCostumer(@Valid @RequestBody CostumerDTO costumerDTO) {
        return ResponseEntity.ok(costumerService.saveCostumer(costumerDTO));
    }
	
	@GetMapping(value = "/costumers", params = "companyName")
    public ResponseEntity<List<Costumer>> findCostumerByName(@Param("companyName") String companyName) {
        return ResponseEntity.ok(costumerService.findByCompanyName(companyName));
    }
	
	@GetMapping(value = "/costumers/{companyDocumentNumber}")
    public ResponseEntity<Costumer> findCostumerByDocumentNumber(@PathVariable("companyDocumentNumber") String companyDocumentNumber) {
        return ResponseEntity.ok(costumerService.findByCompanyDocumentNumber(companyDocumentNumber));
    }
	
    @GetMapping("/costumers")
    public ResponseEntity<List<Costumer>> allCostumers() {
        return ResponseEntity.ok(costumerService.findAllCostumers());
    }
    
    @PutMapping("/costumers/{companyDocumentNumber}")
    public ResponseEntity<Costumer> updateCostumer(@PathVariable("companyDocumentNumber") String companyDocumentNumber, @Valid @RequestBody CostumerDTO costumerDTO) {
        return ResponseEntity.ok(costumerService.updateCostumer(companyDocumentNumber, costumerDTO));
    }
    
    @DeleteMapping("/costumers/{companyDocumentNumber}")
    public ResponseEntity<Costumer> disableCostumer(@PathVariable("companyDocumentNumber") String companyDocumentNumber) {
        return ResponseEntity.ok(costumerService.disableCostumer(companyDocumentNumber));
    }
}
