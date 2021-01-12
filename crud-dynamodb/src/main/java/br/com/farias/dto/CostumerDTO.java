package br.com.farias.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.farias.model.Costumer;

public class CostumerDTO implements Serializable {

	private static final long serialVersionUID = -5930049605375977848L;
	
	@JsonProperty("company_name")
    @NotNull
    @NotBlank
    private String companyName;

    @JsonProperty("company_document_number")
    @NotNull
    @NotBlank
    private String companyDocumentNumber;

    @JsonProperty("phone_number")
    @NotNull
    @NotBlank
    private String phoneNumber;

    @JsonProperty("active")
    private Boolean active;

    public Costumer costumerDTOToCostumer() {
        return new Costumer(
                this.companyName,
                this.companyDocumentNumber,
                this.phoneNumber,
                true
        );
    }

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyDocumentNumber() {
		return companyDocumentNumber;
	}

	public void setCompanyDocumentNumber(String companyDocumentNumber) {
		this.companyDocumentNumber = companyDocumentNumber;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
}
