import photoSnapImg from "../assets/images/photosnap.svg"
import img2 from "../assets/images/manage.svg"
import img3 from "../assets/images/account.svg"
import img4 from "../assets/images/myhome.svg"
import img5 from "../assets/images/loop-studios.svg"
import img6 from "../assets/images/faceit.svg"
import img7 from "../assets/images/shortly.svg"
import img8 from "../assets/images/insure.svg"
import img9 from "../assets/images/eyecam-co.svg"
import img10 from "../assets/images/the-air-filter-company.svg"


const JobList = ({job, addToFilters}) => {
    const images = [
        {id: 1, Image: photoSnapImg},
        {id: 2, Image: img2},
        {id: 3, Image: img3},
        {id: 4, Image: img4},
        {id: 5, Image: img5},
        {id: 6, Image: img6},
        {id: 7, Image: img7},
        {id: 8, Image: img8},
        {id: 9, Image: img9},
        {id: 10, Image: img10},
    ]
    
    return(
        <article className="flex">
        <div className="flex">
            <img src={images.find(img => img.id === job.id).Image} alt={job.company}/>
            <div className="job-details">
                <div>
                    <span className="job-company">{job.company}</span>
                    { job.new && <span className="new">New</span>}
                    {job.featured && <span className="job-featured">Featured</span>}
                </div>
                <p>{job.jobTitle}</p>
                <div className="flex">
                    <span>{job.datePosted}</span>
                    <span>.</span>
                    <span>{job.contract}</span>
                    <span>.</span>
                    <span>{job.location}</span>
                </div>
            </div>
        </div>

        <div>
            <button 
            onClick={() => addToFilters({type: "role", value: job.role})}
            >{job.role}
            </button>

            <button 
            onClick={() => addToFilters({type: "level", value: job.level})}
            >{job.level}
            </button>
            {
                job.languages.map((language, index) => {
                return (
                <button
                 key={index}
                onClick={() => addToFilters({type: "language", value: language})}
                  >{language}
                </button>)
                })
            }
            {
                job.tools.map((tool, index) => {
                return (
                <button 
                key={index} 
                onClick={() => addToFilters({type: "tool", value: tool})}
                >
                {tool}
                </button>
                ) 
            })
            }
        </div>
    </article>      
    )
}

export default JobList;