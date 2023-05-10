package com.example.swu_news_ai

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.swu_news_ai.databinding.ActivityPreferenceBinding

class PreferenceActivity : AppCompatActivity() {
    lateinit var binding:ActivityPreferenceBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding= ActivityPreferenceBinding.inflate(layoutInflater)
        setContentView(binding.root)


        var preferenceList=mutableListOf<String>("시사","상식","문화","대학","슌배님","사진","슈냥이","사람","비평","만평")
        val prefernceRVAdapter = PreferenceRVAdapter(preferenceList)
        binding.preferenceCategoryRv.adapter = prefernceRVAdapter

        val preferenceDatesLayoutManager = GridLayoutManager(this,2)
        preferenceDatesLayoutManager.orientation = GridLayoutManager.VERTICAL
        binding.preferenceCategoryRv.layoutManager = preferenceDatesLayoutManager
    }
}