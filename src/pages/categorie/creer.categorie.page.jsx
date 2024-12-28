const Creercategorie = () =>{

    return(
        <div className="container-xxl flex-grow-1 container-p-y">
<h4 class="fw-bold py-3 mb-4">
    <span class="text-muted fw-light">Categorie /</span> ajouter une categorie /
    <a href='/dashboard/liste-des-produits'>Liste des categorie </a>
</h4>
{/* Basic Layout */}
<div className="row">
    <div className="col-xl">
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Basic Layout</h5>
                <small className="text-muted float-end">Default label</small>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="basic-default-fullname">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="basic-default-fullname"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="basic-default-company">
                            Company
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="basic-default-company"
                            placeholder="ACME Inc."
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="basic-default-email">
                            Email
                        </label>
                        <div className="input-group input-group-merge">
                            <input
                                type="text"
                                id="basic-default-email"
                                className="form-control"
                                placeholder="john.doe"
                                aria-label="john.doe"
                                aria-describedby="basic-default-email2"
                            />
                            <span className="input-group-text" id="basic-default-email2">
                                @example.com
                            </span>
                        </div>
                        <div className="form-text">
                            You can use letters, numbers &amp; periods
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="basic-default-phone">
                            Phone No
                        </label>
                        <input
                            type="text"
                            id="basic-default-phone"
                            className="form-control phone-mask"
                            placeholder="658 799 8941"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="basic-default-message">
                            Message
                        </label>
                        <textarea
                            id="basic-default-message"
                            className="form-control"
                            placeholder="Hi, Do you have a moment to talk Joe?"
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    )
}
export default Creercategorie;
