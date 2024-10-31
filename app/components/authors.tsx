import "./authors.css";


export default function Authors() {
    return (
      <div>
        <div className="is-size-5 publication-authors">
            <span className="author-block"> 
                <a href="">Deema Alnuhait</a><sup>1</sup>
            </span>
            <span className="author-block"> 
                <a href="">Neeraja Kirtane</a><sup>1</sup>
            </span>
            <span className="author-block"> 
                <a href="">Muhammad Khalifa</a><sup>2</sup>
            </span>
            <span className="author-block"> 
                <a href="">Hao Peng</a><sup>1</sup>
            </span>
        </div>
        <div className="is-size-3 align-center">
            <span className="place-block">
                <sup>1</sup><a href="">University of Illinois Urbana-Champaign </a>
            </span>
            <span className="place-block">
                <sup>2</sup><a href="">University of Michigan </a>
            </span>
        </div>
    </div>
    );
}

  