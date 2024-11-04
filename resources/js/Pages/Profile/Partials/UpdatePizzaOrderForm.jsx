import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function UpdatePizzaOrderForm({ pizza, className = "" }) {
    const OrdetStatus = ["Ordered", "Prepping", "Baking", "Checking", "Ready"];
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            size: pizza.size,
            crust: pizza.crust,
            status: pizza.status,
            toppings: pizza.toppings.join(","),
        });
    const submit = (e) => {
        e.preventDefault();
        patch(route("pizzas.update", pizza.id));
    };
    console.log(recentlySuccessful);

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Order Information
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    View and change any information associated with this order.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />
                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.toppings}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="crust" value="Crust" />
                    <TextInput
                        id="crust"
                        className="mt-1 block w-full"
                        value={data.crust}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />
                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={OrdetStatus}
                        value={data.status}
                        onChange={(e) =>
                            setData({
                                ...data,
                                status: e.target.value,
                            })
                        }
                    />
                    <InputError className="mt-2" message={data.statusError} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton>Save Changes</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
