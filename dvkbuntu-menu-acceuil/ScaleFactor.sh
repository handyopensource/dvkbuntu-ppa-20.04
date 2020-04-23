#!/bin/sh

case $1 in
    "1") kcmfontscale="96";;
    "1.1") kcmfontscale="106";;
    "1.2") kcmfontscale="115";;
    "1.3") kcmfontscale="125";;
    "1.4") kcmfontscale="134";;
    "1.5") kcmfontscale="144";;
    "1.6") kcmfontscale="154";;
    "1.7") kcmfontscale="163";;
    "1.8") kcmfontscale="173";;
    "1.9") kcmfontscale="182";;
    "2") kcmfontscale="192";;
    "2.1") kcmfontscale="202";;
    "2.2") kcmfontscale="211";;
    "2.3") kcmfontscale="221";;
    "2.4") kcmfontscale="230";;
    "2.5") kcmfontscale="240";;
    "2.6") kcmfontscale="250";;
    "2.7") kcmfontscale="259";;
    "2.8") kcmfontscale="269";;
    "2.9") kcmfontscale="278";;
    "3") kcmfontscale="288";;
    *) kcmfontscale="96";;
esac

my_file="$HOME/.config/kdeglobals"

my_ligne1="[KScreen]"
my_ligne2="ScaleFactor"
my_ligne3="ScreenScaleFactor"

if [ ! -f "$my_file" ]; then
    cp /usr/share/kubuntu-default-settings/kf5-settings/kdeglobals "$my_file"
fi

if grep -q "$my_line1" "$my_file"; then
   if grep -q "$my_ligne3" "$my_file"; then
       sed -i "s/^ScaleFactor=.*/ScaleFactor=$1/g" "$my_file"
       sed -i "s/^ScreenScaleFactors=.*/ScreenScaleFactors=DP-1-1=$1;HDMI-1-1=$1;HDMI-1-2=$1;DP-1-2=$1;DVI-D-1=$1;HDMI-3=$1;DP-3=$1;/g" "$my_file" 
   else
       sed -i "s/^ScaleFactor=.*/ScaleFactor=$1\nScreenScaleFactors=DP-1-1=$1;HDMI-1-1=$1;HDMI-1-2=$1;DP-1-2=$1;DVI-D-1=$1;HDMI-3=$1;DP-3=$1;/g" "$my_file"
   fi
else
   echo "" >> "$my_file"
   echo "$my_ligne1" >> "$my_file"
   echo "ScaleFactor=$1" >> "$my_file"
   echo "ScreenScaleFactors=DP-1-1=$1;HDMI-1-1=$1;HDMI-1-2=$1;DP-1-2=$1;DVI-D-1=$1;HDMI-3=$1;DP-3=$1" >> "$my_file"
fi


my_file2="$HOME/.config/kcmfonts"

echo "[General]" > "$my_file2"
echo "dontChangeAASettings=true" >> "$my_file2"
echo "forceFontDPI=$kcmfontscale" >> "$my_file2"

my_file3="$HOME/.kde/share/config/kdeglobals"

sed -i -e '/^\[KScreen\]/d' "$my_file3"
sed -i -e '/^ScaleFactor/d' "$my_file3"
sed -i -e '/^ScreenScaleFactor/d' "$my_file3"
