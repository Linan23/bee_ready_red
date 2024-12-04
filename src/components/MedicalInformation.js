import React from 'react';

function MedicalInformation() {
    return (
        <main>
            <div className="medical-information-container">
                <h1 className="medical-information-header" data-translate>Medical Information</h1>
                <div className="resources">
                    {/* Urgent Care Section */}
                    <div className="resource">
                        <img
                            src="/LVHN.jpg"
                            alt="Urgent Care"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.lvhn.org/medical-services/expresscare/locations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Express Care
                                </a>
                            </h2>
                            <p data-translate>
                                Find the nearest urgent care facility for quick and professional medical attention
                            </p>
                        </div>
                    </div>

                    {/* Medic aid */}
                    <div className="resource">
                        <img
                            src="/pa.jpg"
                            alt="Dental Services"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.pa.gov/en/agencies/dhs/resources/medicaid.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Medical Aid
                                </a>
                            </h2>
                            <p data-translate>
                                Find the nearest urgent care facility for quick and professional medical attention
                            </p>
                        </div>
                    </div>

                    {/* Pediatric Services */}
                    <div className="resource">
                        <img
                            src="/lv_peds.jpeg"
                            alt="Pediatric Services"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://lehighvalleypeds.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Lehigh Valley Pediatric
                                </a>
                            </h2>
                            <p data-translate>
                                Learn about child health, wellness, and connect with pediatric healthcare providers
                            </p>
                        </div>
                    </div>

                    {/* Pediatric Services */}
                    <div className="resource">
                        <img
                            src="/aap.png"
                            alt="Pediatric Services"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.aap.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    American Academy of Pediatrics
                                </a>
                            </h2>
                            <p data-translate>
                                Learn about child health, wellness, and connect with pediatric healthcare providers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MedicalInformation;
