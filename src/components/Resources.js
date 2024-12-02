import React from 'react';
import { Link } from 'react-router-dom';

function Resources() {
    return (
        <main>
            <div className="container">
                <h1 data-translate>Resources</h1>
                <div className="resources">
                    {/* School Registration */}
                    <div className="resource">
                        <img src="/learning.jpeg" alt="School Registration" />
                        <div>
                            <h2>
                                <Link
                                    to="/school-registration"
                                    className="resource-link"
                                    data-translate
                                >
                                    School Registration
                                </Link>
                            </h2>
                            <p data-translate>
                                Explore our educational resources to support and enrich your child's learning journey. 
                                With information from school registration requirements to helpful study tips and engaging learning, 
                                empower your child's education with the support they need to thrive!
                            </p>
                        </div>
                    </div>

                    {/* Medical Services */}
                    <div className="resource">
                        <img src="/medical.png" alt="Medical Services" />
                        <div>
                            <h2>
                                <a
                                    href="https://example-medical-services.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Medical Services
                                </a>
                            </h2>
                            <p data-translate>
                                Find crucial medical information such as doctors, dentists, and your nearest urgent care to provide the best for your child. 
                                Healthcare is essential to allow a child to grow and learn. Find healthcare today!
                            </p>
                        </div>
                    </div>

                    {/* Parenting */}
                    <div className="resource">
                        <img src="/parenting.jpg" alt="Parenting" />
                        <div>
                            <h2>
                                <a
                                    href="https://example-food-services.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Parenting
                                </a>
                            </h2>
                            <p data-translate>
                                Raising a child requires a village. From a child's mental health to nutrition, 
                                these resources will help you raise your child to be the healthiest and happiest child.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Resources;
