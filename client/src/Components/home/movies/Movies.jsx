import { useEffect, useState } from "react"
import * as  reviewsService from "../../../services/reviewsServices"
import { Link } from 'react-router-dom';
import { LoadComponent } from "../../loadComponent/LoadComponent";

function Movies() {
    const [latest, setLatest] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        reviewsService.getLatest().then((data) => {
            setLatest(data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadComponent />
    }
    
    return (
        <div className="inside-container service-section">
            <div className="row sections-detail">
                <div className="col-12">
                    <h2 className="section-title">Choose movie you like</h2>
                </div>
            </div>
            <div className={`row service-detail`}>
                {latest?.map(r => (
                    <div className={`col-lg-4`} key={r._id}>
                        <svg
                            version="1.1"
                            className="service-detail-img"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 90 65"
                            style={{ enableBackground: "new 0 0 90 65" }}
                            xmlSpace="preserve"
                        >
                            <g id="Icon_3_">
                                <g>
                                    <path
                                        style={{
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            fill: "#FE86D4"
                                        }}
                                        d="M76.92,39.764c-0.337,0-4.672-3.362-9.909-6.196
                      c2.071-6.184,2.881-12.203,2.881-12.646c0.37-0.369,0-1.108-0.37-1.478c-0.37-0.369-0.74-0.369-1.479-0.369
                      c-0.348,0.347-9.207,1.352-16.416,4.544c-2.682-4.936-5.582-8.782-5.778-8.978c-0.74-0.739-2.219-0.739-2.959,0
                      c-0.2,0.396-3.17,4.323-5.881,9.295c-7.187-3.195-15.964-4.492-16.312-4.492c-0.37-0.369-1.11,0-1.479,0.37
                      c-0.37,0.369-0.37,0.739-0.37,1.478c0,0.428,0.747,6.037,2.659,11.977c-5.763,2.889-10.076,6.495-10.427,6.495
                      c-0.37,0.369-0.74,0.739-0.74,1.478c0,0.739,0.37,1.108,0.74,1.478c0.74,0.369,13.686,10.344,22.933,10.344
                      c4.701,0,7.979-1.411,9.798-4.064h0.47c1.964,2.653,5.001,4.064,9.706,4.064c9.247,0,22.563-9.975,22.933-10.344
                      c0.37-0.37,0.74-0.739,0.74-1.478C77.66,40.503,77.29,40.134,76.92,39.764z M65.823,23.139c-0.74,4.803-2.959,14.408-7.398,18.842
                      c-1.539,1.537-2.815,2.346-3.921,2.741c1.036-1.685,1.701-3.949,1.701-7.175c0-3.318-1.295-7.16-2.967-10.74
                      C57.512,24.765,62.846,23.801,65.823,23.139z M35.344,27.24c-1.59,3.44-2.811,7.094-2.811,10.307c0,3.506,0.762,5.919,1.968,7.633
                      c-1.165-0.355-2.519-1.164-4.187-2.83c-4.439-4.064-6.658-14.039-7.398-18.842C25.879,24.166,30.887,25.411,35.344,27.24z
                       M34.379,49.37c-5.915,0-14.422-5.542-18.491-8.128c1.805-1.201,4.346-2.649,7.021-4.138c1.254,3.019,2.833,5.856,4.816,7.832
                      C30.314,47.522,33.273,49,35.862,49c0.877,0,1.953-0.299,2.926-0.761c0.196,0.063,0.388,0.126,0.588,0.177
                      C38.307,48.974,36.743,49.37,34.379,49.37z M44.37,44.937c-4.809,0-8.138-0.37-8.138-7.758c0-5.911,5.548-14.408,8.138-18.472
                      c2.589,4.064,8.138,12.561,8.138,18.472C52.507,44.567,49.178,44.937,44.37,44.937z M53.617,49.37
                      c-2.193,0-3.628-0.34-4.642-0.835c0.503-0.118,0.995-0.266,1.465-0.443c0.84,0.322,1.705,0.54,2.437,0.54
                      c2.589,0,5.179-1.109,8.138-4.064c1.861-1.858,3.362-4.474,4.579-7.285c2.719,1.426,5.075,2.808,6.518,3.96
                      C68.412,43.828,59.535,49.37,53.617,49.37z"
                                    />
                                </g>
                            </g>
                        </svg>
                        <Link to={`movie-reviews/${r._id}/details`}>
                            <h3 className="service-title">{r.title}</h3>
                        </Link>
                        <p className="service-desc">
                            {r.description}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Movies