import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Tracker() {
    const [activities, setActivities] = useState([]);
    const [values, setValues] = useState({
        date: new Date().toISOString().split('T')[0], // Default to today
        type: 'Exercise',
        val: '',
        notes: ''
    });
    const BACKEND_URL = "https://healthtrack-67vp.onrender.com";
    useEffect(() => {
        fetchActivities();
    }, []);
    const fetchActivities = () => {
        axios.get(`${BACKEND_URL}/api/activities`)
            .then(res => {
                if(Array.isArray(res.data)) {
                    setActivities(res.data);
                } else {
                    console.error("Data is not an array:", res.data);
                }
            })
            .catch(err => console.error("Error fetching data:", err));
    };
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BACKEND_URL}/api/activities`, values)
            .then(res => {
                fetchActivities(); 
                setValues({ ...values, val: '', notes: '' }); 
            })
            .catch(err => {
                console.error(err);
                alert("Error saving activity: " + err);
            });
    }
    const handleDelete = (id) => {
        axios.delete(`${BACKEND_URL}/api/activities/${id}`)
            .then(() => fetchActivities())
            .catch(err => alert("Error deleting: " + err));
    }
    return (
        <div className="container py-5 fade-in">
            <h2 className="mb-4">Tracker</h2>  
            {}
            <div className="card fresh p-4 mb-5">
                <h5 className="text-success mb-3">New Entry</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label className="form-label small text-muted">Date</label>
                            <input type="date" name="date" className="form-control" value={values.date} onChange={handleInput} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted">Type</label>
                            <select name="type" className="form-select" value={values.type} onChange={handleInput}>
                                <option>Exercise</option>
                                <option>Sleep</option>
                                <option>Water</option>
                                <option>Meditation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small text-muted">Value (e.g., 30mins, 2 liters)</label>
                            <input type="text" name="val" className="form-control" value={values.val} onChange={handleInput} required placeholder="Duration or amount" />
                        </div>
                        <div className="col-12">
                            <label className="form-label small text-muted">Notes (Optional)</label>
                            <input type="text" name="notes" className="form-control" value={values.notes} onChange={handleInput} placeholder="How did you feel?" />
                        </div>
                        <div className="col-12 text-end">
                            <button type="submit" className="btn btn-success px-4">Add Log</button>
                        </div>
                    </div>
                </form>
            </div>
            {}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Total Entries: {activities.length}</span>
                <button className="btn btn-sm btn-outline-secondary" onClick={fetchActivities}>Refresh List</button>
            </div>
            <div className="card shadow-sm">
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="ps-4">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Value</th>
                                <th scope="col">Notes</th>
                                <th scope="col" className="text-end pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-5 text-muted">
                                        No entries found. Start logging!
                                    </td>
                                </tr>
                            ) : (
                                activities.map((item, index) => (
                                    <tr key={index}>
                                        <td className="ps-4">{item.date}</td>
                                        <td><span className="badge bg-success bg-opacity-10 text-success">{item.type}</span></td>
                                        <td>{item.val}</td>
                                        <td className="text-muted small">{item.notes}</td>
                                        <td className="text-end pe-4">
                                            <button className="btn btn-sm btn-link text-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Tracker;