import React, {useMemo, useState} from 'react';
import { users as initialUsers } from '../../data/users.mock.js';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './table.css'

const columns = [
    {key: 'id', title: 'ID', sortable: true},
    {key: 'role', title: 'Роль', sortable: true},
    {key: 'name', title: 'Имя', sortable: true},
    {key: 'login', title: 'Логин', sortable: true},
    {key: 'position', title: 'Должность', sortable: false},
    {key: 'contacts', title: 'Контакты', sortable: false},
    {key: 'email', title: 'Почта', sortable: true},
    {key: 'phone', title: 'Телефон', sortable: false},
    {key: 'city', title: 'Город', sortable: true},
];

export default function Table() {
    const [sortField, setSortField] = useState('id');
    const [sortDir, setSortDir] = useState('asc');

    function handleSort(field) {
        if (sortField === field) {
            setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortField(field);
            setSortDir("asc");
        }
    }

    const sorted = useMemo(() => {
        const copy = [...initialUsers];
        copy.sort((a, b) => {
            const v1 = a[sortField];
            const v2 = b[sortField];
            if (v1 == null && v2 == null) return 0;
            if (v1 == null) return -1;
            if (v2 == null) return 1;

            if (sortField === "id") {
                return sortDir === "asc" ? a.id - b.id : b.id - a.id;
            }
            const s1 = String(v1).toLowerCase();
            const s2 = String(v2).toLowerCase();
            if ( s1 === s2 ) return 0;
                return sortDir === "asc" ? ( s1 > s2 ? 1 : -1) : ( s1 > s2 ? -1 : 1);
        });
        return copy;
    }, [sortField, sortDir]);

    return (
        <div className="table-container">
            <table className="users-table">
                <TableHeader
                    columns = {columns}
                    sortField = {sortField}
                    sortDir = {sortDir}
                    onSort = {handleSort}
                />
                <tbody>
                {sorted.map((u) => (
                    <TableRow key = { u.id + u.login} user = {u} />
                ))}
                </tbody>
            </table>
        </div>
    );
}