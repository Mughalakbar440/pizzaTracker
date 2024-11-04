import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import UpdatePizzaOrderForm from "../Profile/Partials/UpdatePizzaOrderForm";

const Edit = ({ pizza }) => {
    const Columns = ["size", "status", "chef"];
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Order #{pizza.id}
                </h2>
            }
        >
            <Head title={`Order  #${pizza.id}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <UpdatePizzaOrderForm
                                pizza={pizza}
                                className=""
                            ></UpdatePizzaOrderForm>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
