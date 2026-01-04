import React from 'react';
import Table from "../components/table/Table.jsx";
import Pagination from "../components/pagination/Pagination.jsx";
import Button from "../components/button/Button.jsx";
import Input from "../components/ui/Input.jsx";
import IconButton from "../components/ui/IconButton.jsx";
import './users.css'

export default function UsersPage() {
    return(
        <div className="page">
            <div className="top">
                <div className="breadcrumbs">
                    <span className="breadcrumb-item">Данные</span>
                    <span className="breadcrumb-divider"> / </span>
                    <span className="breadcrumb-item">Пользователи</span>
                </div>
                <h1 className="title">Пользователи</h1>

                <div className="controls-row">
                    <div className="search-group">
                        <Input placeholder="Найти пользователя" />
                        <div className="divider-vertical"></div>
                        <IconButton icon="settings" />
                        <IconButton icon="filter" />
                    </div>
                    <div className="spacer" />
                    <Button variant="primary" icon="+" >
                        Добавить пользователя
                    </Button>
                </div>
            </div>

            <Table />

            <div className="pagination-wrap">
                <Pagination />
            </div>

            <footer className="page-footer">
                <div> Показано 1-20 из 30 000 пользователей</div>
            </footer>
        </div>
    );
}