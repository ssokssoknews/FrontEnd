package com.example.swu_news_ai

import android.util.Log
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.swu_news_ai.databinding.PreferenceRvitemBinding

class PreferenceRVAdapter (val preference_cate: List<String>) :
    RecyclerView.Adapter<PreferenceRVAdapter.ViewHolder>() {

    inner class ViewHolder(val binding: PreferenceRvitemBinding) :
        RecyclerView.ViewHolder(binding.root) {
        fun bind(preferences: String) {
            binding.preferenceItemTv.text=preferences
        }
    }

    override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): ViewHolder {
        val binding: PreferenceRvitemBinding = PreferenceRvitemBinding.inflate(
            LayoutInflater.from(viewGroup.context),
            viewGroup,
            false
        )
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val binding = (holder as PreferenceRVAdapter.ViewHolder).binding
        holder.bind(preference_cate[position])
        binding.preferenceItemRoot.setOnClickListener {
            Log.d("preference clicked", "${position}")
        }
    }
    override fun getItemCount(): Int = preference_cate.size
}