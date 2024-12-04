import React from 'react';

function Parenting() {
    return (
        <main>
            <div className="parent-container">
                <h1 className="parent-header" data-translate>Parenting Information</h1>
                <div className="resources">

                    {/* AAP Parenting */}
                    <div className="resource">
                        <img
                            src="/aap.png"
                            alt="AAP Parenting"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.healthychildren.org/English/Pages/default.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    AAP Parenting
                                </a>
                            </h2>
                            <p data-translate>
                            The American Academy of Pediatrics (AAP) and its member pediatricians dedicate their efforts and resources to the health, safety and well-being of infants, children, adolescents and young adults
                            </p>
                        </div>
                    </div>
                    {/* AAP Parenting */}
                    <div className="resource2">
                        <img
                            src="/fce.png"
                            alt="Family Connection"
                        />
                        <div>
                            <h2>
                                <a
                                    href="https://www.familyconnectionofeaston.org/family-support/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resource-link"
                                    data-translate
                                >
                                    Family Connection of Easton
                                </a>
                            </h2>
                            <p data-translate>
                            Family centers are places within the community where parents can come to share and receive support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Parenting;
