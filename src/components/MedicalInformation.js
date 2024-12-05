import React from 'react';
import '../styles.css';

function MedicalInformation() {
    return (
        <main>
            <div className="medical-information-container">
                <h1 className="medical-information-header" data-translate>Medical Information</h1>
                <div className="resources">
                    {/* VisionWorks  */}
                    <div className="resource">
                        <img
                            src="/Hive.png"
                            alt="Urgent Care"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.visionworks.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Visionworks Northampton Crossings
                                </a>
                            </h2>
                            <a
                                href="https://maps.app.goo.gl/9eWtihhn4ST8ct7A7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="address-link"
                            >
                                <span className="address-icon">📍</span> 3714 Nazareth Rd unit 4, Easton, PA 18045, USA
                            </a>
                            <p data-translate>
                                Visit here for eye exams and glasses! Call for appointment.
                            </p>
                        </div>
                    </div>

                    {/* Children's Dental Health of Easton */}
                    <div className="resource">
                        <img
                            src="/cdh.jpg"
                            alt="Medical Aid"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://childrensdentalhealth.com/locations/easton/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Children's Dental Health of Easton
                                </a>
                            </h2>
                            <a
                                href="https://maps.app.goo.gl/9eWtihhn4ST8ct7A7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="address-link"
                            >
                                <span className="address-icon">📍</span> 1800 Sullivan Trail suite 120, Easton, PA 18040, USA
                            </a>
                            <p data-translate>
                                Healthy smiles start here! From the moment you step foot into the office, our goal is to provide an interactive experience for all of our kiddos so they look forward to coming to the dentist for years to come.
                            </p>
                        </div>
                    </div>

                    {/* Mediaid */}
                    <div className="resource">
                        <img
                            src="/pa.jpg"
                            alt="Pediatric Services"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.pa.gov/en/agencies/dhs/programs-services/apply-for-benefits.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Mediaid
                                </a>
                            </h2>
                            <a
                                href="https://maps.app.goo.gl/w4pCEdJWzLsxtLy97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="address-link"
                            >
                                <span className="address-icon">📍</span> 201 Larry Holmes Dr, Easton, PA 18042, USA
                            </a>
                            <p data-translate>
                                Apply for medical insurance! Head to Northampton County Assistance Office for assistance to apply or apply online!
                            </p>
                        </div>
                    </div>

                    {/* Star Community Health */}
                    <div className="resource">
                        <img
                            src="/Hive.png"
                            alt="American Academy of Pediatrics"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://starcommunityhealth.org/services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Star Community Health
                                </a>
                            </h2>
                            <a
                                href="https://maps.app.goo.gl/6cUVqjfUuEmtiSKP7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="address-link"
                            >
                                <span className="address-icon">📍</span> 220 Ferry St, Easton, PA, USA
                            </a>
                            <p data-translate>
                                Our mission is to be the leading preventive and comprehensive primary health care provider in Pennsylvania. We are committed to providing services that are patient-focused, high-quality, accessible, and cost-effective. Services will be provided with respect to the social, religious, cultural, and economic needs of the communities we serve. All patients are serviced regardless of ability to pay. Through education, innovation and community partnerships, we will anticipate and exceed the expectations of our patients and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MedicalInformation;
