import React from 'react';

function SchoolRegistration() {
    return (
        <main>
            <div className="school-registration-container">
                <h1 className="school-registration-header">School Registration</h1>
                <div className="resources">
                    {/* Pre-K Registration Section */}
                    <div className="resource">
                        <img
                            src="/Hive.png"
                            alt="Pre-K Registration"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://bornready.org/pre-k-parent-resources/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                >
                                    Pre-K Registration
                                </a>
                            </h2>
                            <p>
                                Get more resources for free on the Born Ready website to prepare your child before school starts!
                            </p>
                        </div>
                    </div>

                    {/* K-12 Registration Section */}
                    <div className="resource">
                        <img
                            src="/easton.jpg"
                            alt="K-12 Registration"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.eastonsd.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                >
                                    K-12 Registration
                                </a>
                            </h2>
                            <p>
                               
Register for Easton Area's kindergarten today! Age must be 5 before September first. Bring child’s state birth certificate, or other proof of birth, the child’s social security number(recommended), and documentation of the child’s completed basic immunizations for registration. Parents/guardians must also present acceptable proof of residence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SchoolRegistration;
