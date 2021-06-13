import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Toast, Button, Form, Col, InputGroup, Modal, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
// console.log(Icon);

// const api_data = [
//   [
//     "1,001",
//     "Lorem",
//     "ipsum",
//     "dolor",
//     "sit",
//   ],
//   [
//     "1,002",
//     "amet",
//     "consectetur",
//     "adipiscing",
//     "elit",
//   ],
//   [
//     "1,003",
//     "Integer",
//     "nec",
//     "odio",
//     "Praesent",
//   ],
//   [
//     "1,003",
//     "libero",
//     "Sed",
//     "cursus",
//     "ante",
//   ],
//   [
//     "1,004",
//     "dapibus",
//     "diam",
//     "Sed",
//     "nisi",
//   ],
//   [
//     "1,005",
//     "Nulla",
//     "quis",
//     "sem",
//     "at",
//   ],
//   [
//     "1,006",
//     "nibh",
//     "elementum",
//     "imperdiet",
//     "Duis",
//   ],
//   [
//     "1,007",
//     "sagittis",
//     "ipsum",
//     "Praesent",
//     "mauris",
//   ],
//   [
//     "1,008",
//     "Fusce",
//     "nec",
//     "tellus",
//     "sed",
//   ],
//   [
//     "1,009",
//     "augue",
//     "semper",
//     "porta",
//     "Mauris",
//   ],
//   [
//     "1,010",
//     "massa",
//     "Vestibulum",
//     "lacinia",
//     "arcu",
//   ],
//   [
//     "1,011",
//     "eget",
//     "nulla",
//     "Class",
//     "aptent",
//   ],
//   [
//     "1,012",
//     "taciti",
//     "sociosqu",
//     "ad",
//     "litora",
//   ],
//   [
//     "1,013",
//     "torquent",
//     "per",
//     "conubia",
//     "nostra",
//   ],
//   [
//     "1,014",
//     "per",
//     "inceptos",
//     "himenaeos",
//     "Curabitur",
//   ],
//   [
//     "1,015",
//     "sodales",
//     "ligula",
//     "in",
//     "libero",
//   ],
// ];

const api_data = [
  {
    name: "Lorem",
    description: "ipsum",
    price: "dolor",
  },
  { name: "amet",
    description: "consectetur",
    price: "adipiscing",
  },
  { name: "nec",
    description: "odio",
    price: "Praesent",
  },
  { name: "Sed",
    description: "cursus",
    price: "ante",
  },
  { name: "diam",
    description: "Sed",
    price: "nisi",
  },
  { name: "quis",
    description: "sem",
    price: "at",
  },
  { name: "elementum",
    description: "imperdiet",
    price: "Duis",
  },
  { name: "ipsum",
    description: "Praesent",
    price: "mauris",
  },
  { name: "nec",
    description: "tellus",
    price: "sed",
  },
  { name: "semper",
    description: "porta",
    price: "Mauris",
  },
  { name: "Vestibulum",
    description: "lacinia",
    price: "arcu",
  },
  { name: "nulla",
    description: "Class",
    price: "aptent",
  },
  { name: "sociosqu",
    description: "ad",
    price: "litora",
  },
  { name: "per",
    description: "conubia",
    price: "nostra",
  },
  {
    name: "inceptos",
    description: "himenaeos",
    price: "Curabitur",
  },
  {
    name: "ligula",
    description: "in",
    price: "libero",
  },
];


// function FormExample() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Row>
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Prepend>
//               <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             </InputGroup.Prepend>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Form.Row>
//       <Form.Group>
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

const API = {
  Products: {
    get: function() {
      console.log('getting Products');
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(api_data);
        }, 3000);
      })
    },
    add: function() {
      console.log('add Product');
      console.log(arguments[0], arguments[1]);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('Something went wrong while adding product');
          // resolve({});
        }, 3000);
      })
    },
    update: function() {
      console.log('updating Product');
      console.log(arguments[0], arguments[1]);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // reject('Something went wrong while updating product');
          resolve({});
        }, 3000);
      })
    },
    delete: function() {
      console.log('deleting Product');
      console.log(arguments[0], arguments[1]);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // reject('Something went wrong while deleting product');
          resolve({});
        }, 3000);
      })
    },
  },
};

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});

function ProductForm({
  isLoading,
  data,
  show,
  handleClose,
  handleSubmit
}) {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={function(values, actions) {
            handleSubmit(data.item, values);
          }}
          initialValues={{
            name: data.item.name || '',
            description: data.item.description || '',
            price: data.item.price || '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    isInvalid={!!errors.price}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit" {...{ disabled: isLoading ? true : false }}>
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Please wait...</span>
                  </>
                ) : 'Submit'}
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

function capitalize(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [editing, setEditing] = useState({
    index: -1,
    item: {},
  });
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    API.Products.get()
    .then(response => {
      console.log(response);
      setData(response);
    })
    .catch(error => {
      alert(error);
      console.log(error);
    });
  }, []);

  function Product() {}
  Product.edit = function(idx, item) {
    const tmp = {...editing};
    tmp.index = idx;
    tmp.item = item;
    setEditing(tmp);
    handleShow();
  }
  Product.add = function(oldValues, newValues) {
    setLoading(true);
    return API.Products.add(newValues)
    .then(response => {
      setLoading(false);
      console.log(response);
      const tmp = [...data];
      tmp.push(newValues);
      setData(tmp);
      handleClose();
      setToast({
        show: true,
        message: 'Product added successfully',
      })
    })
    .catch(error => {
      setLoading(false);
      setToast({
        show: true,
        message: error,
      })
      throw error;
    });
  }
  Product.update = function(oldValues, newValues) {
    console.log(oldValues, newValues);
    if (JSON.stringify(oldValues) == JSON.stringify(newValues)) {
      setToast({
        show: true,
        message: 'No Changes in Product',
      });
      return Promise.reject();
    }
    setLoading(true);
    return API.Products.update(editing.index, newValues)
    .then(response => {
      setLoading(false);
      console.log(response);
      const tmp = [...data];
      tmp[editing.index] = newValues;
      setData(tmp);
      handleClose();
      setToast({
        show: true,
        message: 'Product updated successfully',
      })
    })
    .catch(error => {
      setLoading(false);
      setToast({
        show: true,
        message: error,
      })
      throw error;
    });
  }
  Product.delete = function(idx) {
    setLoading(true);
    API.Products.delete(editing.index)
    .then(response => {
      setLoading(false);
      const tmp = [...data];
      tmp.splice(idx, 1);
      setData(tmp);
      setToast({
        show: true,
        message: 'Product deleted successfully',
      })
    })
    .catch(error => {
      setLoading(false);
      console.log(error);
      setToast({
        show: true,
        message: error,
      })
    });
  };

  return (
    <div>
      <div className="position-fixed p-3" style={{zIndex: 999999999, right: 0}}>
        <Toast onClose={() => setToast({ message: '', show: false })} show={toast.show} delay={3000} autohide>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {data.length > 0 ? (
          <div className="row">
            <main role="main" className="col-md-9 m-auto col-lg-10 pt-3 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => Product.edit(-1, {})}
                  >
                    <Icon.Plus size={24} />
                  </button>
                </div>
              </div>

              <h2>Products</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      {data.length > 0 && Object.keys(data[0]).map(h => (
                        <th>{capitalize(h)}</th>
                      ))}
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{d.name}</td>
                        <td>{d.description}</td>
                        <td>{d.price}</td>
                        <td>
                          <Icon.Edit style={{ cursor: 'pointer' }} size={18} onClick={() => !isLoading && Product.edit(idx, d)} />
                          <Icon.X style={{ cursor: 'pointer' }} size={18} onClick={() => !isLoading && Product.delete(idx)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        ) : (
          <Spinner
            as="div"
            style={{
              top: '50%',
              left: '50%',
              position: 'absolute',
            }}
            animation="border"
            role="status"
          />
        )}
      </div>
      <ProductForm
        isLoading={isLoading}
        data={editing}
        show={show}
        handleClose={handleClose}
        handleSubmit={editing.index == -1 ? Product.add : Product.update}
      />
    </div>
  );
}

export default App;
