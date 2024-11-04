<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Response;

class PizzaContoller extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();
        return inertia::render('Pizzas/All', ['pizzas' => $pizzas, 'success' => session('success')]);

    }
    public function edit(Pizza $pizza)
    {
        return Inertia::render('Pizzas/Edit', ['pizza' => $pizza]);
    }

    public function update(Pizza $pizza, request $request)
    {
        $pizza->update([
            'status' => $request->status,
        ]);
        return to_route('pizzas.index')->with('success', "Order # $pizza->id updated");
    }
}
