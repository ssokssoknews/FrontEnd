package com.example.swu_news_ai

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.swu_news_ai.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {

    lateinit var binding:ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding= ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // 비번 가리기 버튼 클릭
        binding.loginHidePasswordIv.setOnClickListener{

        }

        // 비번까먹음 클릭
        binding.loginForgetpwdTv.setOnClickListener {

        }

        // 로그인 버튼 클릭
        binding.loginSignInBtn.setOnClickListener {

        }

        // 회원가입 버튼 클릭
        binding.loginJoinBtn.setOnClickListener{

        }

    }

    fun getLoginInfo(){
        var userId = binding.loginIdEt.text
        var userPwd = binding.loginPasswordEt.text
    }
}