import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
function Tracker() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    id: null,
    date: '',
    type: 'Exercise',
    val: '',
    notes: ''
  });
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    } else {
      axios.get('https://healthtrack-67vp.onrender.com/activities')
        .then(res => {
          setEntries(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [navigate]);
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const resetForm = () => {
    setForm({ id: null, date: '', type: 'Exercise', val: '', notes: '' });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.val) return;
    if (form.id) {
      axios.put(`http://localhost:5000/api/activities/${form.id}`, form)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
      axios.post('http://localhost:5000/api/activities', form)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
  }
  const handleEdit = (entry) => {
    setForm({
        id: entry.id,
        date: entry.date.split('T')[0],
        type: entry.type,
        val: entry.val,
        notes: entry.notes
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleDelete = (id) => {
    if (!window.confirm('Delete this entry?')) return;
    axios.delete(`http://localhost:5000/api/activities/${id}`)
      .then(res => {
        setEntries(entries.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  }
  const filtered = filter === 'all' ? entries : entries.filter(x => x.type === filter);
  return (
    <div className="container py-5">
      <h2 className="fade-in mb-4">Tracker</h2>
      {}
      <div className="card fresh mb-4 p-4 fade-in">
        <h5 className="mb-3" style={{color: '#2bb6a3'}}>
           {form.id ? 'Edit Entry' : 'New Entry'}
        </h5>
        <form onSubmit={handleSubmit} className="row g-3 align-items-end">
          <div className="col-md-3">
            <label className="form-label small text-muted">Date</label>
            <input name="date" type="date" value={form.date} onChange={handleInput} className="form-control" required />
          </div>
          <div className="col-md-3">
            <label className="form-label small text-muted">Type</label>
            <select name="type" value={form.type} onChange={handleInput} className="form-select">
              <option>Exercise</option>
              <option>Sleep</option>
              <option>Water</option>
              <option>Meal</option>
              <option>Mood</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label small text-muted">Value</label>
            <input name="val" value={form.val} onChange={handleInput} className="form-control" placeholder="ex:, 30min, 2L" required />
          </div>
          <div className="col-md-3 d-flex gap-2">
            <button className="btn btn-primary flex-grow-1" type="submit">
               {form.id ? 'Update Log' : 'Add Log'}
            </button>
            {form.id && (
                <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>Cancel</button>
            )}
          </div>
          <div className="col-12">
            <label className="form-label small text-muted">Notes (Optional)</label>
            <input name="notes" value={form.notes} onChange={handleInput} className="form-control" placeholder="How did you feel?" />
          </div>
        </form>
      </div>
      {}
      <div className="d-flex justify-content-between align-items-center mb-3 fade-in">
        <div className="small text-muted">Total Entries: <strong>{entries.length}</strong></div>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="form-select form-select-sm w-auto">
          <option value="all">All Types</option>
          <option value="Exercise">Exercise</option>
          <option value="Sleep">Sleep</option>
          <option value="Water">Water</option>
          <option value="Meal">Meal</option>
          <option value="Mood">Mood</option>
        </select>
      </div>
      <div className="card fresh p-0 overflow-hidden fade-in">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="ps-4">Date</th>
                <th>Type</th>
                <th>Value</th>
                <th>Notes</th>
                <th className="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(entry => (
                <tr key={entry.id}>
                  <td className="ps-4" style={{fontWeight: 500}}>{new Date(entry.date).toLocaleDateString()}</td>
                  <td><span className="badge bg-light text-dark border px-3 py-2">{entry.type}</span></td>
                  <td>{entry.val}</td>
                  <td className="text-muted small text-truncate" style={{maxWidth: '200px'}}>{entry.notes}</td>
                  {}
                  <td className="text-end pe-4">
                    <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={()=>handleEdit(entry)}
                        title="Edit Entry"
                    >
                        <BsPencilSquare className="me-1"/> Edit
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={()=>handleDelete(entry.id)}
                        title="Delete Entry"
                    >
                        <BsTrash className="me-1"/> Delete
                    </button>
                  </td>

                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan="5" className="text-center py-5 text-muted">No entries found. Start logging!</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Tracker;