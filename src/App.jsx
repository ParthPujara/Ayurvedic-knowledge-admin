import { useEffect, useState } from "react";
import "./App.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [drugValues, setDrugValues] = useState({});
  const fetchDetails = async () => {
    const url = await fetch(
      "https://ayurvedic-knowledge-backend.onrender.com/",
      {
        method: "GET",
      }
    );
    const response = await url.json();
    if (response.status === "success") {
      toast.success("All Drugs are fetched", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setData(response.data.result);
      clearAllFields();
    } else {
      toast.warn("Something went wrong in fetching drugs", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const addDrug = async (e) => {
    e.preventDefault();
    const url = await fetch(
      "https://ayurvedic-knowledge-backend.onrender.com/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          drug_name: drugValues.drug_name,
          Description: drugValues.Description,
          link: drugValues.link,
          Synonymns: drugValues.Synonymns,
          Botanical_name: drugValues.Botanical_name,
          Classification: drugValues.Classification,
          Habitat: drugValues.Habitat,
          Habit: drugValues.Habit,
          Morphology: drugValues.Morphology,
          Useful_part: drugValues.Useful_part,
          Phytoconstituents: drugValues.Phytoconstituents,
          Rasapanchaka: drugValues.Rasapanchaka,
          Karma: drugValues.Karma,
          Agrya_karma: drugValues.Agrya_karma,
          Therapeutic_indication: drugValues.Therapeutic_indication,
          Amayika_Prayoga: drugValues.Amayika_Prayoga,
          Dose: drugValues.Dose,
          Yoga_formulation: drugValues.Yoga_formulation,
          Shlok: drugValues.Shlok,
        }),
      }
    );
    const response = await url.json();
    if (response.status === "success") {
      document.getElementById("addDrug").close();
      toast.success("Drug Added", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      fetchDetails();
    } else {
      toast.warn("Drug not added", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const editDrug = async (e) => {
    e.preventDefault();
    const url = await fetch(
      "https://ayurvedic-knowledge-backend.onrender.com/",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          drug_name: drugValues.drug_name,
          Description: drugValues.Description,
          link: drugValues.link,
          Synonymns: drugValues.Synonymns,
          Botanical_name: drugValues.Botanical_name,
          Classification: drugValues.Classification,
          Habitat: drugValues.Habitat,
          Habit: drugValues.Habit,
          Morphology: drugValues.Morphology,
          Useful_part: drugValues.Useful_part,
          Phytoconstituents: drugValues.Phytoconstituents,
          Rasapanchaka: drugValues.Rasapanchaka,
          Karma: drugValues.Karma,
          Agrya_karma: drugValues.Agrya_karma,
          Therapeutic_indication: drugValues.Therapeutic_indication,
          Amayika_Prayoga: drugValues.Amayika_Prayoga,
          Dose: drugValues.Dose,
          Yoga_formulation: drugValues.Yoga_formulation,
          Shlok: drugValues.Shlok,
        }),
      }
    );
    const response = await url.json();
    console.log(response);
    if (response.status === "success") {
      document.getElementById("editDrug").close();
      toast.success("Drug Edited", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      fetchDetails();
    } else {
      toast.warn("Drug not edited", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const deleteDrug = async (e) => {
    e.preventDefault();
    const url = await fetch(
      "https://ayurvedic-knowledge-backend.onrender.com/",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const response = await url.json();
    if (response.status === "success") {
      toast.success("Drug Deleted", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      fetchDetails();
    } else {
      toast.warn("Drug not deleted", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const clearAllFields = () => {
    setDrugValues({
      drug_name: "",
      Description: "",
      Link: "",
      Synonymns: "",
      Botanical_name: "",
      Classification: "",
      Habitat: "",
      Habit: "",
      Morphology: "",
      Useful_part: "",
      Phytoconstituents: "",
      Rasapanchaka: "",
      Karma: "",
      Agrya_karma: "",
      Therapeutic_indication: "",
      Amayika_Prayoga: "",
      Dose: "",
      Yoga_formulation: "",
      Shlok: "",
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-4">Ayurvedic Drugs</h1>
      <button
        className="btn btn-primary"
        style={{ marginBottom: "30px" }}
        onClick={() => document.getElementById("addDrug").showModal()}
      >
        Add Drug
      </button>
      <dialog id="addDrug" className="modal" style={{ width: "100%" }}>
        <div className="modal-box" style={{ maxWidth: "80%" }}>
          <h3 className="font-bold text-lg">Add Drug</h3>

          <table className="table">
            <tbody>
              <tr>
                <th>Drug Name</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="drug_name"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        drug_name: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Description</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Description"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Description: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Link</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Link"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        link: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Synonymns</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    className="w-100 rounded my-2"
                    type="text"
                    id="Synonymns"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Synonymns: e.target.value,
                      }))
                    }
                    rows="3"
                  />
                </td>
              </tr>
              <tr>
                <th>Botanical name</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Botanical_name"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Botanical_name: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>

              <tr>
                <th>Classification</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    className="w-100 rounded my-2"
                    type="text"
                    id="Classification"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Classification: e.target.value,
                      }))
                    }
                    rows="3"
                  />
                </td>
              </tr>
              <tr>
                <th>Habitat</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Habitat"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Habitat: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Habit</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Habit"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Habit: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Morphology</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    className="w-100 rounded my-2"
                    type="text"
                    id="Morphology"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Morphology: e.target.value,
                      }))
                    }
                    rows="3"
                  />
                </td>
              </tr>
              <tr>
                <th>Useful part</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Useful_part"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Useful_part: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Phytoconstituents</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Phytoconstituents"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Phytoconstituents: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Rasapanchaka</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    className="w-100 rounded my-2"
                    type="text"
                    id="Rasapanchaka"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Rasapanchaka: e.target.value,
                      }))
                    }
                    rows="3"
                  />
                </td>
              </tr>
              <tr>
                <th>Karma</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Karma"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Karma: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Agrya karma</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Agrya_karma"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Agrya_karma: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Therapeutic indication</th>
                <td style={{ width: "100%" }}>
                  <input
                    className="w-100 rounded my-2"
                    type="text"
                    id="Therapeutic_indication"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Therapeutic_indication: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Amayika Prayoga</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    rows="3"
                    className="w-100 rounded my-2"
                    type="text"
                    id="Amayika_Prayoga"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Amayika_Prayoga: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Dose</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    rows="3"
                    className="w-100 rounded my-2"
                    type="text"
                    id="Dose"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Dose: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Yoga formulation</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    rows="3"
                    className="w-100 rounded my-2"
                    type="text"
                    id="Yoga_formulation"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Yoga_formulation: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Shlok</th>
                <td style={{ width: "100%" }}>
                  <textarea
                    rows="3"
                    className="w-100 rounded my-2"
                    type="text"
                    id="Shlok"
                    onChange={(e) =>
                      setDrugValues((drugValues) => ({
                        ...drugValues,
                        Shlok: e.target.value,
                      }))
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <form method="dialog">
            <button className="btn btn-primary" onClick={(e) => addDrug(e)}>
              Save Drug
            </button>
          </form>
        </div>
      </dialog>

      <table className="table-fixed w-full text-center mx-auto">
        <thead className="border-b-2 border-black">
          <tr>
            <th>Drug name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.drug_name}</td>
                <td>{value.Description}</td>
                <td>
                  <div className="flex justify-center gap-4">
                    <div className="drawer-content">
                      <label
                        htmlFor="my-drawer"
                        className="btn drawer-button"
                        style={{ backgroundColor: "#00cfbd" }}
                        onClick={() => {
                          setId(value._id);
                          clearAllFields();
                        }}
                      >
                        View
                      </label>
                    </div>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#7582ff" }}
                      onClick={() => {
                        // clearAllFields();
                        setId(value._id);
                        setDrugValues(value)
                        document.getElementById("editDrug").showModal();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#ff6f70" }}
                      onClick={(e) => {
                        setId(value._id);
                        clearAllFields();
                        deleteDrug(e);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white text-base-content min-h-full w-[60%] p-4">
            {data
              .filter((item) => id === item._id)
              .map((value, key) => {
                return (
                  <>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Drug Name</th>
                          <td>{value.drug_name}</td>
                        </tr>
                        <tr>
                          <th>Description</th>
                          <td>{value.Description}</td>
                        </tr>
                        <tr>
                          <th>Link</th>
                          <td>{value.link}</td>
                        </tr>
                        <tr>
                          <th>Synonymns</th>
                          <td>{value.Synonymns}</td>
                        </tr>
                        <tr>
                          <th>Botanical name</th>
                          <td>{value.Botanical_name}</td>
                        </tr>
                        <tr>
                          <th>Drug Name</th>
                          <td>{value.drug_name}</td>
                        </tr>
                        <tr>
                          <th>Classification</th>
                          <td>{value.Classification}</td>
                        </tr>
                        <tr>
                          <th>Habitat</th>
                          <td>{value.Habitat}</td>
                        </tr>
                        <tr>
                          <th>Habit</th>
                          <td>{value.Habit}</td>
                        </tr>
                        <tr>
                          <th>Morphology</th>
                          <td>{value.Morphology}</td>
                        </tr>
                        <tr>
                          <th>Useful part</th>
                          <td>{value.Useful_part}</td>
                        </tr>
                        <tr>
                          <th>Phytoconstituents</th>
                          <td>{value.Phytoconstituents}</td>
                        </tr>
                        <tr>
                          <th>Rasapanchaka</th>
                          <td>{value.Rasapanchaka}</td>
                        </tr>
                        <tr>
                          <th>Karma</th>
                          <td>{value.Karma}</td>
                        </tr>
                        <tr>
                          <th>Agrya karma</th>
                          <td>{value.Agrya_karma}</td>
                        </tr>
                        <tr>
                          <th>Therapeutic indication</th>
                          <td>{value.Therapeutic_indication}</td>
                        </tr>
                        <tr>
                          <th>Amayika Prayoga:</th>
                          <td>{value.Amayika_Prayoga}</td>
                        </tr>
                        <tr>
                          <th>Dose</th>
                          <td>{value.Dose}</td>
                        </tr>
                        <tr>
                          <th>Yoga formulation</th>
                          <td>{value.Yoga_formulation}</td>
                        </tr>
                        <tr>
                          <th>Shlok</th>
                          <td>{value.Shlok}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      {/* edit drug */}
      <dialog id="editDrug" className="modal" style={{ width: "100%" }}>
        <div className="modal-box" style={{ maxWidth: "80%" }}>
          <h3 className="font-bold text-lg">Edit Drug</h3>

          <table className="table">
            {data
              .filter((item) => id === item._id)
              .map((value, key) => {
                return (
                  <tbody>
                    <tr>
                      <th>Drug Name</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="drug_name"
                          value={drugValues.drug_name}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              drug_name: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Description"
                          value={drugValues.Description}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Description: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Link</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Link"
                          value={drugValues.link}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              link: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Synonymns</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          className="w-100 rounded my-2"
                          type="text"
                          id="Synonymns"
                          value={drugValues.Synonymns.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Synonymns: e.target.value,
                            }))
                          }
                          rows="3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Botanical name</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Botanical_name"
                          value={drugValues.Botanical_name}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Botanical_name: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>

                    <tr>
                      <th>Classification</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          className="w-100 rounded my-2"
                          type="text"
                          id="Classification"
                          value={drugValues.Classification.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Classification: e.target.value,
                            }))
                          }
                          rows="3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Habitat</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Habitat"
                          value={drugValues.Habitat}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Habitat: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Habit</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Habit"
                          value={drugValues.Habit}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Habit: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Morphology</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          className="w-100 rounded my-2"
                          type="text"
                          id="Morphology"
                          value={drugValues.Morphology.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Morphology: e.target.value,
                            }))
                          }
                          rows="3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Useful part</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Useful_part"
                          value={drugValues.Useful_part}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Useful_part: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Phytoconstituents</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Phytoconstituents"
                          value={drugValues.Phytoconstituents}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Phytoconstituents: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Rasapanchaka</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          className="w-100 rounded my-2"
                          type="text"
                          id="Rasapanchaka"
                          value={drugValues.Rasapanchaka.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Rasapanchaka: e.target.value,
                            }))
                          }
                          rows="3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Karma</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Karma"
                          value={drugValues.Karma}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Karma: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Agrya karma</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Agrya_karma"
                          value={drugValues.Agrya_karma}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Agrya_karma: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Therapeutic indication</th>
                      <td style={{ width: "100%" }}>
                        <input
                          className="w-100 rounded my-2"
                          type="text"
                          id="Therapeutic_indication"
                          value={drugValues.Therapeutic_indication}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Therapeutic_indication: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Amayika Prayoga</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          rows="3"
                          className="w-100 rounded my-2"
                          type="text"
                          id="Amayika_Prayoga"
                          value={drugValues.Amayika_Prayoga.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Amayika_Prayoga: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Dose</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          rows="3"
                          className="w-100 rounded my-2"
                          type="text"
                          id="Dose"
                          value={drugValues.Dose.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Dose: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Yoga formulation</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          rows="3"
                          className="w-100 rounded my-2"
                          type="text"
                          id="Yoga_formulation"
                          value={drugValues.Yoga_formulation.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Yoga_formulation: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Shlok</th>
                      <td style={{ width: "100%" }}>
                        <textarea
                          rows="3"
                          className="w-100 rounded my-2"
                          type="text"
                          id="Shlok"
                          value={drugValues.Shlok.toString().replace(
                            /,/g,
                            "\n"
                          )}
                          onChange={(e) =>
                            setDrugValues((drugValues) => ({
                              ...drugValues,
                              Shlok: e.target.value,
                            }))
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>

          <form method="dialog">
            <button className="btn btn-primary" onClick={(e) => editDrug(e)}>
              Edit Drug
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default App;
