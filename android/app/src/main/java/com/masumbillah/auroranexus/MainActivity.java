package com.masumbillah.auroranexus;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {

        registerPlugin(
            AuroraMediaPlugin.class
        );

        super.onCreate(
            savedInstanceState
        );
    }
}
