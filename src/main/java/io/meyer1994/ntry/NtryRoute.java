package io.meyer1994.ntry;

import io.meyer1994.ntry.dto.BirthDTO;
import io.meyer1994.ntry.dto.NewBirthDTO;
import org.apache.camel.LoggingLevel;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.rest.RestBindingMode;
import org.springframework.stereotype.Component;

@Component
public class NtryRoute extends RouteBuilder {
    @Override
    public void configure() {
        restConfiguration()
                .host("localhost")
                .port("8080")
                .bindingMode(RestBindingMode.json);

        rest("/births")
                .post().type(NewBirthDTO.class)
                    .outType(BirthDTO.class)
                    .route()
                        .log("Sending POST to /births")
                        .log(LoggingLevel.DEBUG, "${body}")
                        .bean("ntryService", "deployBirth")
                        .log("Sent POST to /births")
                        .log(LoggingLevel.DEBUG, "${body}")
                .endRest()
                .get("/{id}")
                    .outType(BirthDTO.class)
                    .route()
                        .log("Sending GET to /births/${header.id}")
                        .log(LoggingLevel.DEBUG, "${body}")
                        .bean("ntryService", "fetchBirth(${header.id})")
                        .log("Sent GET to /births/${header.id}")
                        .log(LoggingLevel.DEBUG, "${body}")
                        .removeHeader("id")
                .endRest();
    }
}