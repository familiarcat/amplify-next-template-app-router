'use client';

import {useEffect, useState} from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isApple: boolean;
}

export const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isApple: false,
  });

  useEffect(() => {
    const checkMobile = window.matchMedia('(pointer: coarse)').matches;
    const checkApple = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

    setDeviceInfo({
      isMobile: checkMobile,
      isApple: checkApple,
    });
  }, []);

  return deviceInfo;
};