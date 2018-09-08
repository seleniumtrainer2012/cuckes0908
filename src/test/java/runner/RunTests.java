package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/resources/features"},
		glue={"gluecode"},
		format={"pretty","html:target/site/cucumber-pretty",
				"json:target/cucumber.json"}
		)
public class RunTests {

}
