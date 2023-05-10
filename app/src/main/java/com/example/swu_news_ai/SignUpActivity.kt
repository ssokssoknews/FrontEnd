package com.example.swu_news_ai

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.swu_news_ai.databinding.ActivitySignUpBinding

class SignUpActivity : AppCompatActivity() {

    lateinit var binding:ActivitySignUpBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding= ActivitySignUpBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.signUpNextBtn.setOnClickListener {

        }
    }
    fun getSignUpInfo(){
        var inputId=binding.signUpIdEt.text
        var inputPwd=binding.signUpPwdEt.text
        var pwdCheck=binding.signUpPwdCheckEt.text
        var inputName=binding.signUpNameEt.text

        if (inputPwd!=pwdCheck){
            binding.signUpPwdWarningTv.visibility=View.VISIBLE
        }else{
            binding.signUpPwdWarningTv.visibility=View.INVISIBLE
        }
    }

    fun pwdVisibility(){

    }
}