<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modules\Expenses\Models\Expense;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Expense::query()->create(['name' => 'Tesst', 'sum' => 332.43]);

        return 0;
    }
}
