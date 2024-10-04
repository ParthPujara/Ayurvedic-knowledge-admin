import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [drugValues, setDrugValues] = useState({});
  const fetchDetails = async () => {
    const url = await fetch("http://localhost:1111/", {
      method: "GET",
    });
    const response = await url.json();
    setData(response.data.result);
  };
  const addDrug = async (e) => {
    e.preventDefault();
    const url = await fetch("http://localhost:1111/", {
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
    });
    const response = await url.json();
    if(response.status === "success"){
      fetchDetails();
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className="text-center">
        <h2>Details</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Drug name</th>
              <th scope="col">Description</th>
              <th scope="col">View detials of the drug</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.drug_name}</td>
                  <td>{value.Description}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#drugDescription"
                      onClick={() => setId(value._id)}
                    >
                      Detials
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addDrug"
        >
          Add Drug
        </button>
      </div>

      <div
        class="modal fade"
        id="drugDescription"
        tabindex="-1"
        aria-labelledby="drugDescriptionLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detailed Description</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {data
                .filter((item) => id === item._id)
                .map((value, key) => {
                  return (
                    <>
                      <table className="table">
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
                      </table>
                    </>
                  );
                })}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="addDrug"
        tabindex="-1"
        aria-labelledby="addDrugLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Detailed Description</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="#">
              <div class="modal-body">
                <table className="table">
                  <tr>
                    <th>Drug Name</th>
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                    <td style={{ width: "80%" }}>
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
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onClick={(e) => addDrug(e)}
                >
                  Save Drug
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
