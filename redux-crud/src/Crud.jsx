import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './features/CounterSlice';
import './Style.css';

export default function Crud() {
    const [name, setName] = useState("");
    const [studentField, setStudentField] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const record = useSelector((state) => state.Counterkey.data);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    };

    const handleAdd = () => {
        if (editIndex !== null) {
            dispatch(updateData({
                id: editIndex, 
                name, 
                studentField, 
                bookName, 
                bookAuthor, 
                purchaseDate, 
                returnDate 
            }));
            setEditIndex(null); 
        } else {
            dispatch(addData({
                id: Date.now(),
                name,
                studentField,
                bookName,
                bookAuthor,
                purchaseDate,
                returnDate
            }));
        }
        clearForm();
    };

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id === id);
        setName(singleData.name);
        setStudentField(singleData.studentField);
        setBookName(singleData.bookName);
        setBookAuthor(singleData.bookAuthor);
        setPurchaseDate(singleData.purchaseDate);
        setReturnDate(singleData.returnDate);
        setEditIndex(id);
    };

    const clearForm = () => {
        setName("");
        setStudentField("");
        setBookName("");
        setBookAuthor("");
        setPurchaseDate("");
        setReturnDate("");
    };

    return (
        <div className="crud-container">
            <h1>Library Management System</h1>
            <div className="form-container">
                <input  type="text"  placeholder="Student Name"  value={name}  onChange={(e) => setName(e.target.value)} />
                <input  type="text"  placeholder="Student Field"  value={studentField}  onChange={(e) => setStudentField(e.target.value)} />
                <input  type="text"  placeholder="Book Name"  value={bookName}  onChange={(e) => setBookName(e.target.value)} />
                <input  type="text"  placeholder="Book Author Name"  value={bookAuthor}  onChange={(e) => setBookAuthor(e.target.value)} /> 
                <label>Book Purchase Date</label>
                <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} /> 
                <label>Book Return Date</label>
                <input type="date"  value={returnDate}  onChange={(e) => setReturnDate(e.target.value)} /> 
                <button onClick={handleAdd}>{editIndex !== null ? "Update Data" : "Add Data"}</button>
            </div>

            {record.length > 0 && (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Student Field</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Purchase Date</th>
                            <th>Return Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.studentField}</td>
                                <td>{e.bookName}</td>
                                <td>{e.bookAuthor}</td>
                                <td>{e.purchaseDate}</td>
                                <td>{e.returnDate}</td>
                                <td>
                                    <button onClick={() => handleEdit(e.id)}>Edit</button>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>    
            )}
        </div>
    );
}
