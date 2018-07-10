import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
import company_edax from '../../images/edax.png';
import company_accenture from '../../images/accenture.jpg';
import company_tce from '../../images/tce-pe.png';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>       
        <Col m={8} s={12}>
            <h5 className="subtitle">About Me</h5>
            <Card>
                <div>
                    <p>I have been working as a software developer (full stack) for over four years, with experience in Web and Desktop technologies, data modeling, requirements gathering and creation of technical documentation. Proficient in technologies such as Java (SE, EE, JAX-RS, JSF, JPA, Hibernate, Maven), C# .Net Core, Javascript ES6/ES7 (Aurelia e KnockoutJS frameworks), HTML5 and CSS3, PL/SQL.</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiences</h5>
            <Experience title="Full Stack Web Developer"
                company="Edax Tecnologia"
                description="Working with a hospital software where I develop new features, create components for architecture back-end/front-end, bug fixing and create reports (DevExpress). The technologies used are C# with ADO .Net for the back-end and for the front-end are Javascript ES6/ES7 through the frameworks Aurelia/KnockoutJS, for the database is Oracle 11g (used PL/SQL) and Git. I also perform a technical leadership for and participation in the meetings that analyze the activities that will be included in the Sprint. I had a fundamental role in defining the processes and workflow of the development team."
                avatar={company_edax}
            />
            <Experience title="Software Engnieer Associate"
                company="Accenture"
                description="System analyst back-end using technologies Java EE with the frameworks JAX-RS and JPA, creating REST and SOAP services that are exposed to the OSB (Oracle Service Bus) layer. Deploy the EAR packages on the IBM WebSphere. Creating technical documentation with UML diagrams. Support tools: Maven, SQL Developer, SoapUI, Postman, SVN and RTC (Rational Team Concert)."
                avatar={company_accenture}
            />
            <Experience title="Developer Intern"
                company="Tribunal de Contas do Estado de Pernambuco"
                description="Systems maintenance SAGRES (System of Monitoring the Management of Company Resources), LICON (Bidding System and Contracts), User System and Systems of Jurisdictional Units, using Technologies Java SE (JPA/Hibernate/JavaDB - Derby) and Java EE (JSP/Hibernate), and SQL Server database."
                avatar={company_tce}
            />
        </Col> 
    </Row>
);

export default Home;