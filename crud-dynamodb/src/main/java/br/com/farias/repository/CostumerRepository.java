package br.com.farias.repository;

import java.util.List;
import java.util.Optional;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import br.com.farias.model.Costumer;

@EnableScan
public interface CostumerRepository extends CrudRepository<Costumer, String> {
	
	List<Costumer> findByCompanyName(String companyName);
	
	Optional<Costumer> findByCompanyDocumentNumber(String companyDocumentNumber);
}
