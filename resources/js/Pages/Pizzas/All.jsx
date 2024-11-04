import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const All = ({ pizzas, success }) => {
    const [successmsg, setsuccessmsg] = useState(success);

    setTimeout(() => {
        setsuccessmsg("");
    }, 3000);
    const Columns = ["size", "status", "chef"];
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Pizzas
                </h2>
            }
        >
            <Head title="Pizza Tracker" />
            {successmsg && (
                <div
                    className="p-4 mb-4 mt-4 text-lg text-center text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                >
                    {successmsg}
                </div>
            )}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Table
                                items={pizzas}
                                columns={Columns}
                                action="pizzas.edit"
                                primary="Order number"
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default All;
