import React, { useState } from 'react';
import '../styles.css';

function AboutUs() {
    const contributors = [
        {
            name: 'Patricia A. Hunter',
            role: 'Role',
            bio: `Patricia has 40 years of experience in the educational field and more than 15 years of
            
            executive-level experience in early childhood administration. She was the CEO of an education
            
            and childcare facility. She has developed child and family engagement programs and built
            
            relationships leading to organizing community collaborations.

            Patricia is a former board member of PennAEYC (the state affiliate of the National Association
            
            of Young Children) and state board member of Penn SACCA (Affiliate of the National School-age
            
            Child Care Alliance). Currently, she serves as a board member of Lehigh and Northampton
            
            Chapter of PennAEYC, a member of the Career Institute of Technology - Early Childhood
            
            Education Occupation Advisory Committee, Northampton County Children & Youth Advisory
            
            Committee, Lehigh Valley Child Care Program Committee, and Easton Area School District
            
            Diversity Alliance Professional Development and Curriculum Instruction Sub Committee.

            Patricia graduated from Moravian College with a BA in Elementary Education and recently
            
            completed remote instruction training and was certified to teach online noncredit traditional,
            
            hybrid courses at Northampton Community College Virtual Campus. Patricia is employed by
            
            ESS and works as a substitute elementary teacher primarily in the Easton Area School District.`,
            img: '/Hive.png',
        },
        {
            name: 'Henry Hernandez',
            role: 'Role',
            bio: `Henry is a dynamic leader currently serving as a Senior Community Relations Consultant at Capital Blue Cross. Joining the team in 2021, he brought with him valuable experience gained as a Senior Health Navigator for AmeriHealth Caritas Pennsylvania. In his role on the corporate social responsibility team, Henry is dedicated to raising awareness and spearheading community outreach for CHIP (Children’s Health Insurance Program) in the vibrant Lehigh Valley and Northern region, encompassing Union, Snyder, Columbia, Montour, and Northumberland counties.
    
            At the heart of his professional journey is a passion for community engagement, particularly in initiating and nurturing new initiatives. Henry finds immense satisfaction in witnessing these projects blossom and make a positive impact.
    
            Beyond his corporate endeavors, he serves on the Hispanic Center Lehigh Valley Board, the Easton Salvation Army Advisory Board, and the 2023 Latino Convention Planning Committee. As a member of the Governor Commission on Latino Affairs, Henry hopes to establish or strengthen health policy to serve the Commonwealth's Latino community better.
    
            Henry's academic background includes an Associate in Social Work from Northampton Community College and a bachelor’s degree in Health Service Administration from East Stroudsburg University. He is a proud alumnus of Upward Bound. Originally from Honduras, Henry has called the United States home for over two decades, currently residing in Allentown, Lehigh County. Beyond his professional pursuits, he finds joy in dancing and cherishes moments spent with friends and family.`,
            img: '/Hive.png',
        },
        {
            name: 'Rosemary Kocher',
            role: 'Role',
            bio: `Rosemary has been an educator for thirty-plus years, with twenty-three of those years in the Bangor Area School District. Rosemary has a B.S. in Elementary Education and M.Ed. in Reading. In addition, she is also a certified special education teacher and reading specialist. She holds a Reading Supervisor certification and an Administrator certification.
    
            Rosemary has taught second grade, special education, basic skills reading and math, and reading. She has been a Title I Coordinator, Director of Elementary Education, Elementary and Middle School Assistant Principal, and Director of Instructional Support. Rosemary has helped to create programs for preschool through high school children, as well as programs for parents and staff development for teachers.
    
            Rosemary is committed to promoting programs and resources for children and families. She is a member of the Board of Directors of the Slater Family Network, a family center in Bangor, PA, and the Totts Gap Arts Institute, also in Bangor, Pa. Rosemary is a member of the Lehigh and Northampton Chapter of PennAEYC and the Northampton County Children & Youth Advisory Committee. Rosemary is also a Kiwanis Club of Easton member.`,
            img: '/Hive.png',
        },
        {
            name: 'Nancy D. Nicholas',
            role: 'Role',
            bio: `Nancy was a kindergarten teacher in the Easton Area School District for 40 years. In addition, she was a volunteer advisor for over ten years with Family Connection of Easton in the Easton School District. She helped to create developmentally appropriate activities for children and families, assisted with the implementation of programs for children, families, and preschool staff, and coordinated transition activities for incoming kindergarten children at their preschools.
    
            Nancy was a member of the committee that created the formal Easton Area School District Transition Plan. Nancy graduated from Lafayette College with a BA in psychology and received a MS in Early Childhood Education from George Peabody School for Teachers of Vanderbilt University. Nancy is an Executive Board member of the Lehigh and Northampton Chapter of PennAEYC, a member of Palmer Township’s Environmental Steering Committee, a member of the Board of Trustees for Palmer Moravian Church and on the Palmer Moravian Day School Board.`,
            img: '/Hive.png',
        },
        {
            name: 'Terry Thomas',
            role: 'Role',
            bio: `Terry has spent nearly fifty years in the field of early childhood. With her undergraduate degree in education and psychology and a Master’s degree in Early Childhood Education and Child Development, she was primed for her future endeavors.
    
            Her career has included but was not limited to the role of Director of early childhood and school-age programs, early childhood education consultant, and mentor. For many years, she provided supportive clinical care in a large pediatric practice working with children from birth to five and their families on child development, nutrition, behavior, sleep, emotional well-being, and many other aspects of early childhood growth and development.
    
            Another part of her professional life was dedicated to sixteen years of teaching higher education in the field of child development and early childhood education. In the years as a consultant, she was instrumental in helping to revise and rewrite a transition plan for children entering kindergarten and developed a transition program that easily transformed the formal plan into a guide that provided a seamless transition for the children in the Easton Area School District.
    
            Retirement has not changed her passion for supporting and working with young children and families. This is still evident in her work with community organizations that support and promote advocacy for young children and families.`,
            img: '/Hive.png',
        },
        {
            name: 'Bee Ready Red',
            role: 'Developers',
            bio: `A Group of 4 lovely students from Lafayette College, who was encouraged in helping to create better resource hub where families located in the local Easton area could access on the tip of their fingers.`,
            img: '/Hive.png',
        },
    ];

    const [expanded, setExpanded] = useState(
        contributors.map(() => false) // all bios are truncated by the default
    );


    const toggleReadMore = (index) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <main>
            <div className="about-us-container">
                <h1 className="about-us-header" data-translate>About Us</h1>
                <p className="mission" data-translate>
                    To provide outreach directly to underserved neighborhoods that will promote critical early learning for
                    children impacted by poverty. Bee Ready will be built on a strong partnership between parents and a
                    dedicated community that together develops, governs, and evaluates an approach that strengthens the
                    role of parents as primary teachers and advocates for life-long education.
                </p>
                <h2 className="contributors-header" data-translate>Meet the Team</h2>
                <div className="contributors">
                    {contributors.map((contributor, index) => (
                        <div key={index} className="contributor">
                            <img src={contributor.img} alt={contributor.name} className="contributor-img" />
                            <h3 className="contributor-name">{contributor.name}</h3>
                            <p className="contributor-role">{contributor.role}</p>
                            <p className="contributor-bio">
                                {expanded[index]
                                    ? contributor.bio // Show full bio
                                    : `${contributor.bio.substring(0, 150)}...`} {/* Show truncated bio */}
                                <button
                                    className="read-more-btn"
                                    onClick={() => toggleReadMore(index)}
                                >
                                    {expanded[index] ? 'Read Less' : 'Read More'}
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AboutUs;


