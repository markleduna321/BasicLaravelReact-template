<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutoring extends Model
{
    /** @use HasFactory<\Database\Factories\TutoringFactory> */
    use HasFactory; 
    protected $fillable = [
        'student_name',
        'station_number',
        'topic',
        'issue_summary',
        'status',
    ];
}
