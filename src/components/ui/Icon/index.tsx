import classNames from 'classnames'

export type IconProps = {
  className?: string
  name:
    | 'airplane'
    | 'alarm'
    | 'alarm_fill'
    | 'alt'
    | 'ant'
    | 'ant_circle'
    | 'ant_circle_fill'
    | 'ant_fill'
    | 'antenna_radiowaves_left_right'
    | 'app'
    | 'app_badge'
    | 'app_badge_fill'
    | 'app_fill'
    | 'archivebox'
    | 'archivebox_fill'
    | 'arrow_2_circlepath'
    | 'arrow_2_circlepath_circle'
    | 'arrow_2_circlepath_circle_fill'
    | 'arrow_2_squarepath'
    | 'arrow_3_trianglepath'
    | 'arrow_branch'
    | 'arrow_clockwise'
    | 'arrow_clockwise_circle'
    | 'arrow_clockwise_circle_fill'
    | 'arrow_counterclockwise'
    | 'arrow_counterclockwise_circle'
    | 'arrow_counterclockwise_circle_fill'
    | 'arrow_down'
    | 'arrow_down_circle'
    | 'arrow_down_circle_fill'
    | 'arrow_down_doc'
    | 'arrow_down_doc_fill'
    | 'arrow_down_left'
    | 'arrow_down_left_circle'
    | 'arrow_down_left_circle_fill'
    | 'arrow_down_left_square'
    | 'arrow_down_left_square_fill'
    | 'arrow_down_right'
    | 'arrow_down_right_arrow_up_left'
    | 'arrow_down_right_circle'
    | 'arrow_down_right_circle_fill'
    | 'arrow_down_right_square'
    | 'arrow_down_right_square_fill'
    | 'arrow_down_square'
    | 'arrow_down_square_fill'
    | 'arrow_down_to_line'
    | 'arrow_down_to_line_alt'
    | 'arrow_left'
    | 'arrow_left_circle'
    | 'arrow_left_circle_fill'
    | 'arrow_left_right'
    | 'arrow_left_right_circle'
    | 'arrow_left_right_circle_fill'
    | 'arrow_left_right_square'
    | 'arrow_left_right_square_fill'
    | 'arrow_left_square'
    | 'arrow_left_square_fill'
    | 'arrow_left_to_line'
    | 'arrow_left_to_line_alt'
    | 'arrow_merge'
    | 'arrow_right'
    | 'arrow_right_arrow_left'
    | 'arrow_right_arrow_left_circle'
    | 'arrow_right_arrow_left_circle_fill'
    | 'arrow_right_arrow_left_square'
    | 'arrow_right_arrow_left_square_fill'
    | 'arrow_right_circle'
    | 'arrow_right_circle_fill'
    | 'arrow_right_square'
    | 'arrow_right_square_fill'
    | 'arrow_right_to_line'
    | 'arrow_right_to_line_alt'
    | 'arrow_swap'
    | 'arrow_turn_down_left'
    | 'arrow_turn_down_right'
    | 'arrow_turn_left_down'
    | 'arrow_turn_left_up'
    | 'arrow_turn_right_down'
    | 'arrow_turn_right_up'
    | 'arrow_turn_up_left'
    | 'arrow_turn_up_right'
    | 'arrow_up'
    | 'arrow_up_arrow_down'
    | 'arrow_up_arrow_down_circle'
    | 'arrow_up_arrow_down_circle_fill'
    | 'arrow_up_arrow_down_square'
    | 'arrow_up_arrow_down_square_fill'
    | 'arrow_up_bin'
    | 'arrow_up_bin_fill'
    | 'arrow_up_circle'
    | 'arrow_up_circle_fill'
    | 'arrow_up_doc'
    | 'arrow_up_doc_fill'
    | 'arrow_up_down'
    | 'arrow_up_down_circle'
    | 'arrow_up_down_circle_fill'
    | 'arrow_up_down_square'
    | 'arrow_up_down_square_fill'
    | 'arrow_up_left'
    | 'arrow_up_left_arrow_down_right'
    | 'arrow_up_left_circle'
    | 'arrow_up_left_circle_fill'
    | 'arrow_up_left_square'
    | 'arrow_up_left_square_fill'
    | 'arrow_up_right'
    | 'arrow_up_right_circle'
    | 'arrow_up_right_circle_fill'
    | 'arrow_up_right_diamond'
    | 'arrow_up_right_diamond_fill'
    | 'arrow_up_right_square'
    | 'arrow_up_right_square_fill'
    | 'arrow_up_square'
    | 'arrow_up_square_fill'
    | 'arrow_up_to_line'
    | 'arrow_up_to_line_alt'
    | 'arrow_uturn_down'
    | 'arrow_uturn_down_circle'
    | 'arrow_uturn_down_circle_fill'
    | 'arrow_uturn_down_square'
    | 'arrow_uturn_down_square_fill'
    | 'arrow_uturn_left'
    | 'arrow_uturn_left_circle'
    | 'arrow_uturn_left_circle_fill'
    | 'arrow_uturn_left_square'
    | 'arrow_uturn_left_square_fill'
    | 'arrow_uturn_right'
    | 'arrow_uturn_right_circle'
    | 'arrow_uturn_right_circle_fill'
    | 'arrow_uturn_right_square'
    | 'arrow_uturn_right_square_fill'
    | 'arrow_uturn_up'
    | 'arrow_uturn_up_circle'
    | 'arrow_uturn_up_circle_fill'
    | 'arrow_uturn_up_square'
    | 'arrow_uturn_up_square_fill'
    | 'arrowshape_turn_up_left'
    | 'arrowshape_turn_up_left_2'
    | 'arrowshape_turn_up_left_2_fill'
    | 'arrowshape_turn_up_left_circle'
    | 'arrowshape_turn_up_left_circle_fill'
    | 'arrowshape_turn_up_left_fill'
    | 'arrowshape_turn_up_right'
    | 'arrowshape_turn_up_right_circle'
    | 'arrowshape_turn_up_right_circle_fill'
    | 'arrowshape_turn_up_right_fill'
    | 'arrowtriangle_down'
    | 'arrowtriangle_down_circle'
    | 'arrowtriangle_down_circle_fill'
    | 'arrowtriangle_down_fill'
    | 'arrowtriangle_down_square'
    | 'arrowtriangle_down_square_fill'
    | 'arrowtriangle_left'
    | 'arrowtriangle_left_circle'
    | 'arrowtriangle_left_circle_fill'
    | 'arrowtriangle_left_fill'
    | 'arrowtriangle_left_square'
    | 'arrowtriangle_left_square_fill'
    | 'arrowtriangle_right'
    | 'arrowtriangle_right_circle'
    | 'arrowtriangle_right_circle_fill'
    | 'arrowtriangle_right_fill'
    | 'arrowtriangle_right_square'
    | 'arrowtriangle_right_square_fill'
    | 'arrowtriangle_up'
    | 'arrowtriangle_up_circle'
    | 'arrowtriangle_up_circle_fill'
    | 'arrowtriangle_up_fill'
    | 'arrowtriangle_up_square'
    | 'arrowtriangle_up_square_fill'
    | 'asterisk_circle'
    | 'asterisk_circle_fill'
    | 'at'
    | 'at_badge_minus'
    | 'at_badge_plus'
    | 'at_circle'
    | 'at_circle_fill'
    | 'backward'
    | 'backward_end'
    | 'backward_end_alt'
    | 'backward_end_alt_fill'
    | 'backward_end_fill'
    | 'backward_fill'
    | 'badge_plus_radiowaves_right'
    | 'bag'
    | 'bag_badge_minus'
    | 'bag_badge_plus'
    | 'bag_fill'
    | 'bag_fill_badge_minus'
    | 'bag_fill_badge_plus'
    | 'bandage'
    | 'bandage_fill'
    | 'barcode'
    | 'barcode_viewfinder'
    | 'bars'
    | 'battery_0'
    | 'battery_100'
    | 'battery_25'
    | 'bed_double'
    | 'bed_double_fill'
    | 'bell'
    | 'bell_circle'
    | 'bell_circle_fill'
    | 'bell_fill'
    | 'bell_slash'
    | 'bell_slash_fill'
    | 'bin_xmark'
    | 'bin_xmark_fill'
    | 'bitcoin'
    | 'bitcoin_circle'
    | 'bitcoin_circle_fill'
    | 'bold'
    | 'bold_italic_underline'
    | 'bold_underline'
    | 'bolt'
    | 'bolt_badge_a'
    | 'bolt_badge_a_fill'
    | 'bolt_circle'
    | 'bolt_circle_fill'
    | 'bolt_fill'
    | 'bolt_horizontal'
    | 'bolt_horizontal_circle'
    | 'bolt_horizontal_circle_fill'
    | 'bolt_horizontal_fill'
    | 'bolt_slash'
    | 'bolt_slash_fill'
    | 'book'
    | 'book_circle'
    | 'book_circle_fill'
    | 'book_fill'
    | 'bookmark'
    | 'bookmark_fill'
    | 'briefcase'
    | 'briefcase_fill'
    | 'bubble_left'
    | 'bubble_left_bubble_right'
    | 'bubble_left_bubble_right_fill'
    | 'bubble_left_fill'
    | 'bubble_middle_bottom'
    | 'bubble_middle_bottom_fill'
    | 'bubble_middle_top'
    | 'bubble_middle_top_fill'
    | 'bubble_right'
    | 'bubble_right_fill'
    | 'building_2_fill'
    | 'burn'
    | 'burst'
    | 'burst_fill'
    | 'calendar'
    | 'calendar_badge_minus'
    | 'calendar_badge_plus'
    | 'calendar_circle'
    | 'calendar_circle_fill'
    | 'calendar_today'
    | 'camera'
    | 'camera_circle'
    | 'camera_circle_fill'
    | 'camera_fill'
    | 'camera_on_rectangle'
    | 'camera_on_rectangle_fill'
    | 'camera_rotate'
    | 'camera_rotate_fill'
    | 'camera_viewfinder'
    | 'capslock'
    | 'capslock_fill'
    | 'capsule'
    | 'capsule_fill'
    | 'captions_bubble'
    | 'captions_bubble_fill'
    | 'car_fill'
    | 'cart'
    | 'cart_badge_minus'
    | 'cart_badge_plus'
    | 'cart_fill'
    | 'cart_fill_badge_minus'
    | 'cart_fill_badge_plus'
    | 'cat'
    | 'chart_bar'
    | 'chart_bar_alt_fill'
    | 'chart_bar_circle'
    | 'chart_bar_circle_fill'
    | 'chart_bar_fill'
    | 'chart_bar_square'
    | 'chart_bar_square_fill'
    | 'chart_pie'
    | 'chart_pie_fill'
    | 'chat_bubble'
    | 'chat_bubble_2'
    | 'chat_bubble_2_fill'
    | 'chat_bubble_fill'
    | 'chat_bubble_text'
    | 'chat_bubble_text_fill'
    | 'checkmark'
    | 'checkmark_alt'
    | 'checkmark_alt_circle'
    | 'checkmark_alt_circle_fill'
    | 'checkmark_circle'
    | 'checkmark_circle_fill'
    | 'checkmark_rectangle'
    | 'checkmark_rectangle_fill'
    | 'checkmark_seal'
    | 'checkmark_seal_fill'
    | 'checkmark_shield'
    | 'checkmark_shield_fill'
    | 'checkmark_square'
    | 'checkmark_square_fill'
    | 'chevron_compact_down'
    | 'chevron_compact_left'
    | 'chevron_compact_right'
    | 'chevron_compact_up'
    | 'chevron_down'
    | 'chevron_down_circle'
    | 'chevron_down_circle_fill'
    | 'chevron_down_square'
    | 'chevron_down_square_fill'
    | 'chevron_left'
    | 'chevron_left_2'
    | 'chevron_left_circle'
    | 'chevron_left_circle_fill'
    | 'chevron_left_slash_chevron_right'
    | 'chevron_left_square'
    | 'chevron_left_square_fill'
    | 'chevron_right'
    | 'chevron_right_2'
    | 'chevron_right_circle'
    | 'chevron_right_circle_fill'
    | 'chevron_right_square'
    | 'chevron_right_square_fill'
    | 'chevron_up'
    | 'chevron_up_chevron_down'
    | 'chevron_up_circle'
    | 'chevron_up_circle_fill'
    | 'chevron_up_square'
    | 'chevron_up_square_fill'
    | 'circle'
    | 'circle_bottomthird_split'
    | 'circle_fill'
    | 'circle_grid_3x3'
    | 'circle_grid_3x3_fill'
    | 'circle_grid_hex'
    | 'circle_grid_hex_fill'
    | 'circle_lefthalf_fill'
    | 'circle_righthalf_fill'
    | 'clear'
    | 'clear_fill'
    | 'clock'
    | 'clock_fill'
    | 'cloud'
    | 'cloud_bolt'
    | 'cloud_bolt_fill'
    | 'cloud_bolt_rain'
    | 'cloud_bolt_rain_fill'
    | 'cloud_download'
    | 'cloud_download_fill'
    | 'cloud_drizzle'
    | 'cloud_drizzle_fill'
    | 'cloud_fill'
    | 'cloud_fog'
    | 'cloud_fog_fill'
    | 'cloud_hail'
    | 'cloud_hail_fill'
    | 'cloud_heavyrain'
    | 'cloud_heavyrain_fill'
    | 'cloud_moon'
    | 'cloud_moon_bolt'
    | 'cloud_moon_bolt_fill'
    | 'cloud_moon_fill'
    | 'cloud_moon_rain'
    | 'cloud_moon_rain_fill'
    | 'cloud_rain'
    | 'cloud_rain_fill'
    | 'cloud_sleet'
    | 'cloud_sleet_fill'
    | 'cloud_snow'
    | 'cloud_snow_fill'
    | 'cloud_sun'
    | 'cloud_sun_bolt'
    | 'cloud_sun_bolt_fill'
    | 'cloud_sun_fill'
    | 'cloud_sun_rain'
    | 'cloud_sun_rain_fill'
    | 'cloud_upload'
    | 'cloud_upload_fill'
    | 'color_filter'
    | 'color_filter_fill'
    | 'command'
    | 'compass'
    | 'compass_fill'
    | 'control'
    | 'creditcard'
    | 'creditcard_fill'
    | 'crop'
    | 'crop_rotate'
    | 'cube'
    | 'cube_box'
    | 'cube_box_fill'
    | 'cube_fill'
    | 'cursor_rays'
    | 'decrease_indent'
    | 'decrease_quotelevel'
    | 'delete_left'
    | 'delete_left_fill'
    | 'delete_right'
    | 'delete_right_fill'
    | 'desktopcomputer'
    | 'device_desktop'
    | 'device_laptop'
    | 'device_phone_landscape'
    | 'device_phone_portrait'
    | 'device_tablet_landscape'
    | 'device_tablet_portrait'
    | 'dial'
    | 'dial_fill'
    | 'divide'
    | 'divide_circle'
    | 'divide_circle_fill'
    | 'divide_square'
    | 'divide_square_fill'
    | 'doc'
    | 'doc_append'
    | 'doc_chart'
    | 'doc_chart_fill'
    | 'doc_checkmark'
    | 'doc_checkmark_fill'
    | 'doc_circle'
    | 'doc_circle_fill'
    | 'doc_fill'
    | 'doc_on_clipboard'
    | 'doc_on_clipboard_fill'
    | 'doc_on_doc'
    | 'doc_on_doc_fill'
    | 'doc_person'
    | 'doc_person_fill'
    | 'doc_plaintext'
    | 'doc_richtext'
    | 'doc_text'
    | 'doc_text_fill'
    | 'doc_text_search'
    | 'doc_text_viewfinder'
    | 'dog'
    | 'dot_radiowaves_left_right'
    | 'dot_radiowaves_right'
    | 'dot_square'
    | 'dot_square_fill'
    | 'download_circle'
    | 'download_circle_fill'
    | 'drop'
    | 'drop_fill'
    | 'drop_triangle'
    | 'drop_triangle_fill'
    | 'ear'
    | 'eject'
    | 'eject_fill'
    | 'ellipses_bubble'
    | 'ellipses_bubble_fill'
    | 'ellipsis'
    | 'ellipsis_circle'
    | 'ellipsis_circle_fill'
    | 'ellipsis_vertical'
    | 'ellipsis_vertical_circle'
    | 'ellipsis_vertical_circle_fill'
    | 'envelope'
    | 'envelope_badge'
    | 'envelope_badge_fill'
    | 'envelope_circle'
    | 'envelope_circle_fill'
    | 'envelope_fill'
    | 'envelope_open'
    | 'envelope_open_fill'
    | 'equal'
    | 'equal_circle'
    | 'equal_circle_fill'
    | 'equal_square'
    | 'equal_square_fill'
    | 'escape'
    | 'exclamationmark'
    | 'exclamationmark_bubble'
    | 'exclamationmark_bubble_fill'
    | 'exclamationmark_circle'
    | 'exclamationmark_circle_fill'
    | 'exclamationmark_octagon'
    | 'exclamationmark_octagon_fill'
    | 'exclamationmark_shield'
    | 'exclamationmark_shield_fill'
    | 'exclamationmark_square'
    | 'exclamationmark_square_fill'
    | 'exclamationmark_triangle'
    | 'exclamationmark_triangle_fill'
    | 'expand'
    | 'eye'
    | 'eye_fill'
    | 'eye_slash'
    | 'eye_slash_fill'
    | 'eyedropper'
    | 'eyedropper_full'
    | 'eyedropper_halffull'
    | 'eyeglasses'
    | 'f_cursive'
    | 'f_cursive_circle'
    | 'f_cursive_circle_fill'
    | 'film'
    | 'film_fill'
    | 'flag'
    | 'flag_circle'
    | 'flag_circle_fill'
    | 'flag_fill'
    | 'flag_slash'
    | 'flag_slash_fill'
    | 'flame'
    | 'flame_fill'
    | 'floppy_disk'
    | 'flowchart'
    | 'flowchart_fill'
    | 'folder'
    | 'folder_badge_minus'
    | 'folder_badge_person_crop'
    | 'folder_badge_plus'
    | 'folder_circle'
    | 'folder_circle_fill'
    | 'folder_fill'
    | 'folder_fill_badge_minus'
    | 'folder_fill_badge_person_crop'
    | 'folder_fill_badge_plus'
    | 'forward'
    | 'forward_end'
    | 'forward_end_alt'
    | 'forward_end_alt_fill'
    | 'forward_end_fill'
    | 'forward_fill'
    | 'function'
    | 'fx'
    | 'gamecontroller'
    | 'gamecontroller_alt_fill'
    | 'gamecontroller_fill'
    | 'gauge'
    | 'gauge_badge_minus'
    | 'gauge_badge_plus'
    | 'gear'
    | 'gear_alt'
    | 'gear_alt_fill'
    | 'gift'
    | 'gift_alt'
    | 'gift_alt_fill'
    | 'gift_fill'
    | 'globe'
    | 'gobackward'
    | 'gobackward_10'
    | 'gobackward_15'
    | 'gobackward_30'
    | 'gobackward_45'
    | 'gobackward_60'
    | 'gobackward_75'
    | 'gobackward_90'
    | 'gobackward_minus'
    | 'goforward'
    | 'goforward_10'
    | 'goforward_15'
    | 'goforward_30'
    | 'goforward_45'
    | 'goforward_60'
    | 'goforward_75'
    | 'goforward_90'
    | 'goforward_plus'
    | 'graph_circle'
    | 'graph_circle_fill'
    | 'graph_square'
    | 'graph_square_fill'
    | 'greaterthan'
    | 'greaterthan_circle'
    | 'greaterthan_circle_fill'
    | 'greaterthan_square'
    | 'greaterthan_square_fill'
    | 'grid'
    | 'grid_circle'
    | 'grid_circle_fill'
    | 'guitars'
    | 'hammer'
    | 'hammer_fill'
    | 'hand_draw'
    | 'hand_draw_fill'
    | 'hand_point_left'
    | 'hand_point_left_fill'
    | 'hand_point_right'
    | 'hand_point_right_fill'
    | 'hand_raised'
    | 'hand_raised_fill'
    | 'hand_raised_slash'
    | 'hand_raised_slash_fill'
    | 'hand_thumbsdown'
    | 'hand_thumbsdown_fill'
    | 'hand_thumbsup'
    | 'hand_thumbsup_fill'
    | 'hare'
    | 'hare_fill'
    | 'headphones'
    | 'heart'
    | 'heart_circle'
    | 'heart_circle_fill'
    | 'heart_fill'
    | 'heart_slash'
    | 'heart_slash_circle'
    | 'heart_slash_circle_fill'
    | 'heart_slash_fill'
    | 'helm'
    | 'hexagon'
    | 'hexagon_fill'
    | 'hifispeaker'
    | 'hifispeaker_fill'
    | 'hourglass'
    | 'hourglass_bottomhalf_fill'
    | 'hourglass_tophalf_fill'
    | 'house'
    | 'house_alt'
    | 'house_alt_fill'
    | 'house_fill'
    | 'hurricane'
    | 'increase_indent'
    | 'increase_quotelevel'
    | 'infinite'
    | 'info'
    | 'info_circle'
    | 'info_circle_fill'
    | 'italic'
    | 'keyboard'
    | 'keyboard_chevron_compact_down'
    | 'largecircle_fill_circle'
    | 'lasso'
    | 'layers'
    | 'layers_alt'
    | 'layers_alt_fill'
    | 'layers_fill'
    | 'leaf_arrow_circlepath'
    | 'lessthan'
    | 'lessthan_circle'
    | 'lessthan_circle_fill'
    | 'lessthan_square'
    | 'lessthan_square_fill'
    | 'light_max'
    | 'light_min'
    | 'lightbulb'
    | 'lightbulb_fill'
    | 'lightbulb_slash'
    | 'lightbulb_slash_fill'
    | 'line_horizontal_3'
    | 'line_horizontal_3_decrease'
    | 'line_horizontal_3_decrease_circle'
    | 'line_horizontal_3_decrease_circle_fill'
    | 'link'
    | 'link_circle'
    | 'link_circle_fill'
    | 'list_bullet'
    | 'list_bullet_below_rectangle'
    | 'list_bullet_indent'
    | 'list_dash'
    | 'list_number'
    | 'list_number_rtl'
    | 'location'
    | 'location_circle'
    | 'location_circle_fill'
    | 'location_fill'
    | 'location_north'
    | 'location_north_fill'
    | 'location_north_line'
    | 'location_north_line_fill'
    | 'location_slash'
    | 'location_slash_fill'
    | 'lock'
    | 'lock_circle'
    | 'lock_circle_fill'
    | 'lock_fill'
    | 'lock_open'
    | 'lock_open_fill'
    | 'lock_rotation'
    | 'lock_rotation_open'
    | 'lock_shield'
    | 'lock_shield_fill'
    | 'lock_slash'
    | 'lock_slash_fill'
    | 'logo_android'
    | 'logo_android_text'
    | 'logo_apple'
    | 'logo_facebook'
    | 'logo_github'
    | 'logo_google'
    | 'logo_google_text'
    | 'logo_googleplus'
    | 'logo_instagram'
    | 'logo_ios'
    | 'logo_linkedin'
    | 'logo_macos'
    | 'logo_microsoft'
    | 'logo_rss'
    | 'logo_stackoverflow'
    | 'logo_twitter'
    | 'logo_windows'
    | 'macwindow'
    | 'map'
    | 'map_fill'
    | 'map_pin'
    | 'map_pin_ellipse'
    | 'map_pin_slash'
    | 'memories'
    | 'memories_badge_minus'
    | 'memories_badge_plus'
    | 'menu'
    | 'metronome'
    | 'mic'
    | 'mic_circle'
    | 'mic_circle_fill'
    | 'mic_fill'
    | 'mic_slash'
    | 'mic_slash_fill'
    | 'minus'
    | 'minus_circle'
    | 'minus_circle_fill'
    | 'minus_rectangle'
    | 'minus_rectangle_fill'
    | 'minus_slash_plus'
    | 'minus_square'
    | 'minus_square_fill'
    | 'money_dollar'
    | 'money_dollar_circle'
    | 'money_dollar_circle_fill'
    | 'money_euro'
    | 'money_euro_circle'
    | 'money_euro_circle_fill'
    | 'money_pound'
    | 'money_pound_circle'
    | 'money_pound_circle_fill'
    | 'money_rubl'
    | 'money_rubl_circle'
    | 'money_rubl_circle_fill'
    | 'money_yen'
    | 'money_yen_circle'
    | 'money_yen_circle_fill'
    | 'moon'
    | 'moon_circle'
    | 'moon_circle_fill'
    | 'moon_fill'
    | 'moon_stars'
    | 'moon_stars_fill'
    | 'moon_zzz'
    | 'moon_zzz_fill'
    | 'move'
    | 'multiply'
    | 'multiply_circle'
    | 'multiply_circle_fill'
    | 'multiply_square'
    | 'multiply_square_fill'
    | 'music_albums'
    | 'music_albums_fill'
    | 'music_house'
    | 'music_house_fill'
    | 'music_mic'
    | 'music_note'
    | 'music_note_2'
    | 'music_note_list'
    | 'nosign'
    | 'number'
    | 'number_circle'
    | 'number_circle_fill'
    | 'number_square'
    | 'number_square_fill'
    | 'option'
    | 'paintbrush'
    | 'paintbrush_fill'
    | 'pano'
    | 'pano_fill'
    | 'paperclip'
    | 'paperplane'
    | 'paperplane_fill'
    | 'paragraph'
    | 'pause'
    | 'pause_circle'
    | 'pause_circle_fill'
    | 'pause_fill'
    | 'pause_rectangle'
    | 'pause_rectangle_fill'
    | 'paw'
    | 'pencil'
    | 'pencil_circle'
    | 'pencil_circle_fill'
    | 'pencil_ellipsis_rectangle'
    | 'pencil_outline'
    | 'pencil_slash'
    | 'percent'
    | 'person'
    | 'person_2'
    | 'person_2_alt'
    | 'person_2_fill'
    | 'person_2_square_stack'
    | 'person_2_square_stack_fill'
    | 'person_3'
    | 'person_3_fill'
    | 'person_alt'
    | 'person_alt_circle'
    | 'person_alt_circle_fill'
    | 'person_badge_minus'
    | 'person_badge_minus_fill'
    | 'person_badge_plus'
    | 'person_badge_plus_fill'
    | 'person_circle'
    | 'person_circle_fill'
    | 'person_crop_circle'
    | 'person_crop_circle_badge_checkmark'
    | 'person_crop_circle_badge_exclam'
    | 'person_crop_circle_badge_minus'
    | 'person_crop_circle_badge_plus'
    | 'person_crop_circle_badge_xmark'
    | 'person_crop_circle_fill'
    | 'person_crop_circle_fill_badge_checkmark'
    | 'person_crop_circle_fill_badge_exclam'
    | 'person_crop_circle_fill_badge_minus'
    | 'person_crop_circle_fill_badge_plus'
    | 'person_crop_circle_fill_badge_xmark'
    | 'person_crop_rectangle'
    | 'person_crop_rectangle_fill'
    | 'person_crop_square'
    | 'person_crop_square_fill'
    | 'person_fill'
    | 'personalhotspot'
    | 'perspective'
    | 'phone'
    | 'phone_arrow_down_left'
    | 'phone_arrow_right'
    | 'phone_arrow_up_right'
    | 'phone_badge_plus'
    | 'phone_circle'
    | 'phone_circle_fill'
    | 'phone_down'
    | 'phone_down_circle'
    | 'phone_down_circle_fill'
    | 'phone_down_fill'
    | 'phone_fill'
    | 'phone_fill_arrow_down_left'
    | 'phone_fill_arrow_right'
    | 'phone_fill_arrow_up_right'
    | 'phone_fill_badge_plus'
    | 'photo'
    | 'photo_fill'
    | 'photo_fill_on_rectangle_fill'
    | 'photo_on_rectangle'
    | 'piano'
    | 'pin'
    | 'pin_fill'
    | 'pin_slash'
    | 'pin_slash_fill'
    | 'placemark'
    | 'placemark_fill'
    | 'play'
    | 'play_circle'
    | 'play_circle_fill'
    | 'play_fill'
    | 'play_rectangle'
    | 'play_rectangle_fill'
    | 'playpause'
    | 'playpause_fill'
    | 'plus'
    | 'plus_app'
    | 'plus_app_fill'
    | 'plus_bubble'
    | 'plus_bubble_fill'
    | 'plus_circle'
    | 'plus_circle_fill'
    | 'plus_rectangle'
    | 'plus_rectangle_fill'
    | 'plus_rectangle_fill_on_rectangle_fill'
    | 'plus_rectangle_on_rectangle'
    | 'plus_slash_minus'
    | 'plus_square'
    | 'plus_square_fill'
    | 'plus_square_fill_on_square_fill'
    | 'plus_square_on_square'
    | 'plusminus'
    | 'plusminus_circle'
    | 'plusminus_circle_fill'
    | 'poultry_leg'
    | 'power'
    | 'printer'
    | 'printer_fill'
    | 'projective'
    | 'purchased'
    | 'purchased_circle'
    | 'purchased_circle_fill'
    | 'qrcode'
    | 'qrcode_viewfinder'
    | 'question'
    | 'question_circle'
    | 'question_circle_fill'
    | 'question_diamond'
    | 'question_diamond_fill'
    | 'question_square'
    | 'question_square_fill'
    | 'quote_bubble'
    | 'quote_bubble_fill'
    | 'radiowaves_left'
    | 'radiowaves_right'
    | 'rays'
    | 'recordingtape'
    | 'rectangle'
    | 'rectangle_3_offgrid'
    | 'rectangle_3_offgrid_fill'
    | 'rectangle_arrow_up_right_arrow_down_left'
    | 'rectangle_arrow_up_right_arrow_down_left_slash'
    | 'rectangle_badge_checkmark'
    | 'rectangle_badge_xmark'
    | 'rectangle_compress_vertical'
    | 'rectangle_dock'
    | 'rectangle_expand_vertical'
    | 'rectangle_fill'
    | 'rectangle_fill_badge_checkmark'
    | 'rectangle_fill_badge_xmark'
    | 'rectangle_fill_on_rectangle_angled_fill'
    | 'rectangle_fill_on_rectangle_fill'
    | 'rectangle_grid_1x2'
    | 'rectangle_grid_1x2_fill'
    | 'rectangle_grid_2x2'
    | 'rectangle_grid_2x2_fill'
    | 'rectangle_grid_3x2'
    | 'rectangle_grid_3x2_fill'
    | 'rectangle_on_rectangle'
    | 'rectangle_on_rectangle_angled'
    | 'rectangle_paperclip'
    | 'rectangle_split_3x1'
    | 'rectangle_split_3x1_fill'
    | 'rectangle_split_3x3'
    | 'rectangle_split_3x3_fill'
    | 'rectangle_stack'
    | 'rectangle_stack_badge_minus'
    | 'rectangle_stack_badge_person_crop'
    | 'rectangle_stack_badge_plus'
    | 'rectangle_stack_fill'
    | 'rectangle_stack_fill_badge_minus'
    | 'rectangle_stack_fill_badge_person_crop'
    | 'rectangle_stack_fill_badge_plus'
    | 'rectangle_stack_person_crop'
    | 'rectangle_stack_person_crop_fill'
    | 'repeat'
    | 'repeat_1'
    | 'resize'
    | 'resize_h'
    | 'resize_v'
    | 'return'
    | 'rhombus'
    | 'rhombus_fill'
    | 'rocket'
    | 'rocket_fill'
    | 'rosette'
    | 'rotate_left'
    | 'rotate_left_fill'
    | 'rotate_right'
    | 'rotate_right_fill'
    | 'scissors'
    | 'scissors_alt'
    | 'scope'
    | 'scribble'
    | 'search'
    | 'search_circle'
    | 'search_circle_fill'
    | 'selection_pin_in_out'
    | 'shield'
    | 'shield_fill'
    | 'shield_lefthalf_fill'
    | 'shield_slash'
    | 'shield_slash_fill'
    | 'shift'
    | 'shift_fill'
    | 'shuffle'
    | 'sidebar_left'
    | 'sidebar_right'
    | 'signature'
    | 'skew'
    | 'slash_circle'
    | 'slash_circle_fill'
    | 'slider_horizontal_3'
    | 'slider_horizontal_below_rectangle'
    | 'slowmo'
    | 'smallcircle_circle'
    | 'smallcircle_circle_fill'
    | 'smallcircle_fill_circle'
    | 'smallcircle_fill_circle_fill'
    | 'smiley'
    | 'smiley_fill'
    | 'smoke'
    | 'smoke_fill'
    | 'snow'
    | 'sort_down'
    | 'sort_down_circle'
    | 'sort_down_circle_fill'
    | 'sort_up'
    | 'sort_up_circle'
    | 'sort_up_circle_fill'
    | 'sparkles'
    | 'speaker'
    | 'speaker_1'
    | 'speaker_1_fill'
    | 'speaker_2'
    | 'speaker_2_fill'
    | 'speaker_3'
    | 'speaker_3_fill'
    | 'speaker_fill'
    | 'speaker_slash'
    | 'speaker_slash_fill'
    | 'speaker_slash_fill_rtl'
    | 'speaker_slash_rtl'
    | 'speaker_zzz'
    | 'speaker_zzz_fill'
    | 'speaker_zzz_fill_rtl'
    | 'speaker_zzz_rtl'
    | 'speedometer'
    | 'sportscourt'
    | 'sportscourt_fill'
    | 'square'
    | 'square_arrow_down'
    | 'square_arrow_down_fill'
    | 'square_arrow_down_on_square'
    | 'square_arrow_down_on_square_fill'
    | 'square_arrow_left'
    | 'square_arrow_left_fill'
    | 'square_arrow_right'
    | 'square_arrow_right_fill'
    | 'square_arrow_up'
    | 'square_arrow_up_fill'
    | 'square_arrow_up_on_square'
    | 'square_arrow_up_on_square_fill'
    | 'square_favorites'
    | 'square_favorites_alt'
    | 'square_favorites_alt_fill'
    | 'square_favorites_fill'
    | 'square_fill'
    | 'square_fill_line_vertical_square'
    | 'square_fill_line_vertical_square_fill'
    | 'square_fill_on_circle_fill'
    | 'square_fill_on_square_fill'
    | 'square_grid_2x2'
    | 'square_grid_2x2_fill'
    | 'square_grid_3x2'
    | 'square_grid_3x2_fill'
    | 'square_grid_4x3_fill'
    | 'square_lefthalf_fill'
    | 'square_line_vertical_square'
    | 'square_line_vertical_square_fill'
    | 'square_list'
    | 'square_list_fill'
    | 'square_on_circle'
    | 'square_on_square'
    | 'square_pencil'
    | 'square_pencil_fill'
    | 'square_righthalf_fill'
    | 'square_split_1x2'
    | 'square_split_1x2_fill'
    | 'square_split_2x1'
    | 'square_split_2x1_fill'
    | 'square_split_2x2'
    | 'square_split_2x2_fill'
    | 'square_stack'
    | 'square_stack_3d_down_dottedline'
    | 'square_stack_3d_down_right'
    | 'square_stack_3d_down_right_fill'
    | 'square_stack_3d_up'
    | 'square_stack_3d_up_fill'
    | 'square_stack_3d_up_slash'
    | 'square_stack_3d_up_slash_fill'
    | 'square_stack_fill'
    | 'squares_below_rectangle'
    | 'star'
    | 'star_circle'
    | 'star_circle_fill'
    | 'star_fill'
    | 'star_lefthalf_fill'
    | 'star_slash'
    | 'star_slash_fill'
    | 'staroflife'
    | 'staroflife_fill'
    | 'stop'
    | 'stop_circle'
    | 'stop_circle_fill'
    | 'stop_fill'
    | 'stopwatch'
    | 'stopwatch_fill'
    | 'strikethrough'
    | 'suit_club'
    | 'suit_club_fill'
    | 'suit_diamond'
    | 'suit_diamond_fill'
    | 'suit_heart'
    | 'suit_heart_fill'
    | 'suit_spade'
    | 'suit_spade_fill'
    | 'sum'
    | 'sun_dust'
    | 'sun_dust_fill'
    | 'sun_haze'
    | 'sun_haze_fill'
    | 'sun_max'
    | 'sun_max_fill'
    | 'sun_min'
    | 'sun_min_fill'
    | 'sunrise'
    | 'sunrise_fill'
    | 'sunset'
    | 'sunset_fill'
    | 't_bubble'
    | 't_bubble_fill'
    | 'table'
    | 'table_badge_more'
    | 'table_badge_more_fill'
    | 'table_fill'
    | 'tag'
    | 'tag_circle'
    | 'tag_circle_fill'
    | 'tag_fill'
    | 'text_aligncenter'
    | 'text_alignleft'
    | 'text_alignright'
    | 'text_append'
    | 'text_badge_checkmark'
    | 'text_badge_minus'
    | 'text_badge_plus'
    | 'text_badge_star'
    | 'text_badge_xmark'
    | 'text_bubble'
    | 'text_bubble_fill'
    | 'text_cursor'
    | 'text_insert'
    | 'text_justify'
    | 'text_justifyleft'
    | 'text_justifyright'
    | 'text_quote'
    | 'textbox'
    | 'textformat'
    | 'textformat_123'
    | 'textformat_abc'
    | 'textformat_abc_dottedunderline'
    | 'textformat_alt'
    | 'textformat_size'
    | 'textformat_subscript'
    | 'textformat_superscript'
    | 'thermometer'
    | 'thermometer_snowflake'
    | 'thermometer_sun'
    | 'ticket'
    | 'ticket_fill'
    | 'tickets'
    | 'tickets_fill'
    | 'timelapse'
    | 'timer'
    | 'timer_fill'
    | 'today'
    | 'today_fill'
    | 'tornado'
    | 'tortoise'
    | 'tortoise_fill'
    | 'tram_fill'
    | 'trash'
    | 'trash_circle'
    | 'trash_circle_fill'
    | 'trash_fill'
    | 'trash_slash'
    | 'trash_slash_fill'
    | 'tray'
    | 'tray_2'
    | 'tray_2_fill'
    | 'tray_arrow_down'
    | 'tray_arrow_down_fill'
    | 'tray_arrow_up'
    | 'tray_arrow_up_fill'
    | 'tray_fill'
    | 'tray_full'
    | 'tray_full_fill'
    | 'tree'
    | 'triangle'
    | 'triangle_fill'
    | 'triangle_lefthalf_fill'
    | 'triangle_righthalf_fill'
    | 'tropicalstorm'
    | 'tuningfork'
    | 'tv'
    | 'tv_circle'
    | 'tv_circle_fill'
    | 'tv_fill'
    | 'tv_music_note'
    | 'tv_music_note_fill'
    | 'uiwindow_split_2x1'
    | 'umbrella'
    | 'umbrella_fill'
    | 'underline'
    | 'upload_circle'
    | 'upload_circle_fill'
    | 'videocam'
    | 'videocam_circle'
    | 'videocam_circle_fill'
    | 'videocam_fill'
    | 'view_2d'
    | 'view_3d'
    | 'viewfinder'
    | 'viewfinder_circle'
    | 'viewfinder_circle_fill'
    | 'wand_rays'
    | 'wand_rays_inverse'
    | 'wand_stars'
    | 'wand_stars_inverse'
    | 'waveform'
    | 'waveform_circle'
    | 'waveform_circle_fill'
    | 'waveform_path'
    | 'waveform_path_badge_minus'
    | 'waveform_path_badge_plus'
    | 'waveform_path_ecg'
    | 'wifi'
    | 'wifi_exclamationmark'
    | 'wifi_slash'
    | 'wind'
    | 'wind_snow'
    | 'wrench'
    | 'wrench_fill'
    | 'xmark'
    | 'xmark_circle'
    | 'xmark_circle_fill'
    | 'xmark_octagon'
    | 'xmark_octagon_fill'
    | 'xmark_rectangle'
    | 'xmark_rectangle_fill'
    | 'xmark_seal'
    | 'xmark_seal_fill'
    | 'xmark_shield'
    | 'xmark_shield_fill'
    | 'xmark_square'
    | 'xmark_square_fill'
    | 'zoom_in'
    | 'zoom_out'
    | 'zzz'
  size?: number
}

export function Icon({ name, size, className }: IconProps) {
  return (
    <i
      className={classNames('f7-icons', className)}
      style={{
        fontSize: size ? `${size / 16}rem` : undefined,
      }}
    >
      {name}
    </i>
  )
}
